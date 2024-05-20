package middlewares

import (
	"fmt"
	"log"
	"os"

	"github.com/joho/godotenv"
)

// DotEnvVariable -> get .env
func DotEnvVariable(key string) string {

	// load .env file
	// err := godotenv.Load("../../.env")
	err := godotenv.Load("/Users/nritunjaymishra/Documents/myproj/E-Amazon/Backend/backend-go/.env")

    fmt.Println("err >>>>>>", err)
	if err != nil {
		log.Fatalf("Error loading .env file")
	}

	return os.Getenv(key)
}
// Backend/backend-go/handlers/config.go
// Backend/backend-go/.env
// /Users/nritunjaymishra/Documents/myproj/E-Amazon/Backend/backend-go/.env