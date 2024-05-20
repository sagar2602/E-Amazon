package controllers

import (
	"context"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"strings"

	"github.com/gorilla/mux"
	"github.com/umangraval/Go-Mongodb-REST-boilerplate/db"
	middlewares "github.com/umangraval/Go-Mongodb-REST-boilerplate/handlers"
	"github.com/umangraval/Go-Mongodb-REST-boilerplate/models"
	"github.com/umangraval/Go-Mongodb-REST-boilerplate/validators"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	// authMiddleware "/handlers/verifyjwt.go"
	// middlewares "Backend/backend-go/handlers"
)

var client = db.Dbconnect()

// Auths -> get token
var Auths = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	validToken, err := middlewares.GenerateJWT()
	if err != nil {
		middlewares.ErrorResponse("Failed to generate token", response)
	}

	middlewares.SuccessResponse(string(validToken), response)
})

// CreatePersonEndpoint -> create person
var CreatePersonEndpoint = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	var person models.Person
	var existingUser models.Person
	err := json.NewDecoder(request.Body).Decode(&person)
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), response)
		return
	}

	if ok, errors := validators.ValidateInputs(person); !ok {
		middlewares.ValidationResponse(errors, response)
		return
	}

	inputEmail := person.Email
	fmt.Println("\nperson inputEmail = = = >>", inputEmail)
	//return;

	collection := client.Database("golang").Collection("people")
	err1 := collection.FindOne(context.TODO(), bson.D{primitive.E{Key: "email", Value: inputEmail}}).Decode(&existingUser)
	fmt.Println("\n err err11 = = = >>", err1, "\n existingUser =>>", existingUser)

	if err != nil {
		middlewares.ErrorResponse("Error while saving data", response)
		return
	}

	if existingUser.ID != primitive.NilObjectID {
		middlewares.ErrorResponse("User already Exists...", response)
		return
	}

	//create pas hash
	userPass := person.Password
	hashedPassword := middlewares.CreateHashedPass(userPass)
	fmt.Println("\n\n🚀 ~ main function calling ~ hashedPassword:", hashedPassword)
	person.HashedPassword = hashedPassword
	
	fmt.Printf("\n\n🚀 INAL saveOBJ ~ person: %+v \n", person)
	result, err := collection.InsertOne(context.TODO(), person)
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), response)
		return
	}
	res, _ := json.Marshal(result.InsertedID)
	middlewares.SuccessResponse(`Inserted at `+strings.Replace(string(res), `"`, ``, 2), response)
})

// GetPeopleEndpoint -> get people
var GetPeopleEndpoint = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	var people []*models.Person

	collection := client.Database("golang").Collection("people")
	cursor, err := collection.Find(context.TODO(), bson.D{{}})
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), response)
		return
	}
	for cursor.Next(context.TODO()) {
		var person models.Person
		err := cursor.Decode(&person)
		if err != nil {
			log.Fatal(err)
		}

		people = append(people, &person)
	}
	if err := cursor.Err(); err != nil {
		middlewares.ServerErrResponse(err.Error(), response)
		return
	}
	middlewares.SuccessArrRespond(people, response)
})

// GetPersonEndpoint -> get person by id
var GetPersonEndpoint = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	id, _ := primitive.ObjectIDFromHex(params["id"])
	var person models.Person

	collection := client.Database("golang").Collection("people")
	err := collection.FindOne(context.TODO(), bson.D{primitive.E{Key: "_id", Value: id}}).Decode(&person)
	if err != nil {
		middlewares.ErrorResponse("Person does not exist", response)
		return
	}
	middlewares.SuccessRespond(person, response)
})

// DeletePersonEndpoint -> delete person by id
var DeletePersonEndpoint = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	id, _ := primitive.ObjectIDFromHex(params["id"])
	var person models.Person

	collection := client.Database("golang").Collection("people")
	err := collection.FindOne(context.TODO(), bson.D{primitive.E{Key: "_id", Value: id}}).Decode(&person)
	if err != nil {
		middlewares.ErrorResponse("Person does not exist", response)
		return
	}
	_, derr := collection.DeleteOne(context.TODO(), bson.D{primitive.E{Key: "_id", Value: id}})
	if derr != nil {
		middlewares.ServerErrResponse(derr.Error(), response)
		return
	}
	middlewares.SuccessResponse("Deleted", response)
})

// UpdatePersonEndpoint -> update person by id
var UpdatePersonEndpoint = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	params := mux.Vars(request)
	id, _ := primitive.ObjectIDFromHex(params["id"])
	type fname struct {
		Firstname string `json:"firstname"`
	}
	var fir fname
	json.NewDecoder(request.Body).Decode(&fir)
	collection := client.Database("golang").Collection("people")
	res, err := collection.UpdateOne(context.TODO(), bson.D{primitive.E{Key: "_id", Value: id}}, bson.D{primitive.E{Key: "$set", Value: bson.D{primitive.E{Key: "firstname", Value: fir.Firstname}}}})
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), response)
		return
	}
	if res.MatchedCount == 0 {
		middlewares.ErrorResponse("Person does not exist", response)
		return
	}
	middlewares.SuccessResponse("Updated", response)
})

// UploadFileEndpoint -> upload file
var UploadFileEndpoint = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	file, handler, err := request.FormFile("file")
	// fileName := request.FormValue("file_name")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	f, err := os.OpenFile("uploaded/"+handler.Filename, os.O_WRONLY|os.O_CREATE, 0666)
	if err != nil {
		panic(err)
	}
	defer f.Close()
	_, _ = io.Copy(f, file)

	middlewares.SuccessResponse("Uploaded Successfully", response)
})

var LoginUser = http.HandlerFunc(func(response http.ResponseWriter, request *http.Request) {
	var person models.Person
	var existingUser models.Person
	err := json.NewDecoder(request.Body).Decode(&person)
	if err != nil {
		middlewares.ServerErrResponse(err.Error(), response)
		return
	}
	if person.Email == "" || person.Password == "" {
		middlewares.ErrorResponse("Error,  please provide login data", response)
		return 
	}

	inputEmail := person.Email
	fmt.Println("\nperson inputEmail = = = >>", inputEmail)
	//return;

	collection := client.Database("golang").Collection("people")
	errMongo := collection.FindOne(context.TODO(), bson.D{primitive.E{Key: "email", Value: inputEmail}}).Decode(&existingUser)
	fmt.Println("\n err err11 = = = >>", errMongo, "\n existingUser =>>", existingUser)

	if errMongo != nil {
		middlewares.ErrorResponse("Error while saving data", response)
		return
	}

	if existingUser.ID == primitive.NilObjectID {
		middlewares.ErrorResponse("User does Not Exists...", response)
		return
	}

	//create pas hash
	storedHashedPassword :=  existingUser.HashedPassword
	fmt.Println("\n\n 🚀 ~ LoginUser ~ storedHashedPassword:==", storedHashedPassword) 
	isValidUser := middlewares.VerifyPassword(storedHashedPassword, person.Password)
	fmt.Println("🚀 ~ LoginUser ~ isValidUser:", isValidUser)
	
	if isValidUser {
		middlewares.SuccessResponse(`Login successful`,response )
	}else {
		middlewares.ErrorResponse("invalid Credentials", response)
	}
	// return true;
})