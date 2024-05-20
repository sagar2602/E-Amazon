package middlewares

import (
	"fmt"
	"net/http"

	"github.com/fatih/color"
)

// LogRequest -> logs req info
func LogRequest(handler http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		color.Yellow("%s %s %s\n", r.RemoteAddr, r.Method, r.URL)
		fmt.Println("request == >", r)
		handler.ServeHTTP(w, r)
	})
}

