package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/fatih/color"
	// "github.com/gorilla/mux"
	"github.com/rs/cors"
	middlewares "github.com/umangraval/Go-Mongodb-REST-boilerplate/handlers"
    "github.com/umangraval/Go-Mongodb-REST-boilerplate/routes"
)

func hello(w http.ResponseWriter, req *http.Request) {
	fmt.Fprintf(w, "hello\n")
}

func main() {
	port := middlewares.DotEnvVariable("PORT")
	color.Cyan("🌏 Server running on localhost:" + port)

	log.SetFlags(log.Ldate | log.Ltime | log.Lshortfile)
	router := routes.AllRoutes()

	  // Create a new router
	//   router := mux.NewRouter()
	//   router.Handle("/user", routes.UserRoutes())
	// router.PathPrefix("/user").Handler(routes.UserRoutes())
    //  router.HandleFunc("/other", routeHandlers.OtherHandler)




	c := cors.New(cors.Options{
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders: []string{"Content-Type", "Origin", "Accept", "*"},
	})

	handler := c.Handler(router)
	http.ListenAndServe(":"+port, middlewares.LogRequest(handler))
}
