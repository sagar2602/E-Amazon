package middlewares

import (
	"fmt"
	"net/http"
	"os"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
	bcrypt "golang.org/x/crypto/bcrypt"
)

var mySigningKey = []byte(DotEnvVariable("JWT_SECRET"))

// IsAuthorized -> verify jwt header
func IsAuthorized(next http.Handler) http.HandlerFunc {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

		if r.Header["Token"] != nil {

			token, err := jwt.Parse(r.Header["Token"][0], func(token *jwt.Token) (interface{}, error) {
				if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
					return nil, fmt.Errorf("There was an error")
				}
				return mySigningKey, nil
			})

			if err != nil {
				AuthorizationResponse("Invalid JWT token", w)
			}

			if token.Valid {
				next.ServeHTTP(w, r)
			}
		} else {
			AuthorizationResponse("Not Authorized", w)
		}
	})
}

// GenerateJWT -> generate jwt
func GenerateJWT() (string, error) {
	token := jwt.New(jwt.SigningMethodHS256)

	claims := token.Claims.(jwt.MapClaims)

	claims["authorized"] = true
	claims["client"] = "Elliot Forbes"
	claims["exp"] = time.Now().Add(time.Minute * 30).Unix()

	tokenString, err := token.SignedString(mySigningKey)

	if err != nil {
		return "", err
	}

	return tokenString, nil
}

//creates hashed password createHashedPass
func CreateHashedPass(userPass string) string {
	fmt.Println("🚀 ~ funccreateHashedPass ~ userPass:", userPass)
	// Hashing the passowrd using Salt with SALT_SECRET env var
	salt := []byte(userPass + os.Getenv("SALT_SECRET"))
	hashedPasswordBytes, err := bcrypt.GenerateFromPassword([]byte(salt), bcrypt.DefaultCost)
	if err != nil {
		fmt.Println("error while saving password,  hash generation failed", err)
	}
	hashedPassword := string(hashedPasswordBytes)
	fmt.Println("\n\n🚀 ~ funccreateHashedPass ~ hashedPassword:>>>", hashedPassword)

	return hashedPassword
}


func VerifyPassword(storedHash, userPass string) bool {
	// fmt.Println("🚀 ~ funcVerifyPassword ~ userPass:", userPass)
	// fmt.Println("🚀 ~ funcVerifyPassword ~ storedHash:", storedHash)
	
	// Combine user password with the salt
	salt := []byte(userPass + os.Getenv("SALT_SECRET"))

	// Compare the hashed password with the stored hash
	err := bcrypt.CompareHashAndPassword([]byte(storedHash), salt)
	if err != nil {
		// If passwords do not match or an error occurred
		fmt.Println("🚀 ~ at VerifyPassword err:", err)
		return false
	}
	return true
}