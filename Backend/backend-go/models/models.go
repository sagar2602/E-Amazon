package models

import "go.mongodb.org/mongo-driver/bson/primitive"

// Person Model
type Person struct {
	ID        primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempty"`
	Firstname string             `json:"firstname,omitempty" bson:"firstname,omitempty" validate:"required"`
	Lastname  string             `json:"lastname,omitempty" bson:"lastname,omitempty" validate:"required"`
	Phone     string 			 `json:"phone,omitempty" bson:"phone,omitempty" validate:"required"`
    Password  string 			 `json:"password,omitempty" bson:"password,omitempty" validate:"required"`
	Email     string 			 `json:"email,omitempty" bson:"email,omitempty" validate:"required,email"`
	HashedPassword string		 `json:"hashedPassword,omitempty" bson:"hashedPassword,omitempty"`

}
