MongodDB
Golang
React
Splitwise

#### https://github.com/umangraval/Go-Mongodb-REST-boilerplate?tab=readme-ov-file
#### https://github.com/react-boilerplate/react-boilerplate
//npm run dev  //--vite

pwd= /Users/nritunjaymishra/Documents/myproj/E-Amazon/Backend/backend-go
go run main.go
find . -name '*.go' | entr -r go run main.go
go 1.15//starting


upgrade go (1.15 >  1.17)

1. add version in go.mod file >> go 1.19
//to ensure your dependencies are up-to-date and your module is tidy:
2. go mod tidy // if error, do >>  go mod tidy -go=1.16 && go mod tidy -go=1.17
3. go mod vendor
//Remove any previous builds and cache:
4. go clean -modcache 
5. go build
6. go run main.go //or any autorestart

to print object
	fmt.Printf("object= %+v", person)




#####
$ git remote -v

origin  git@github.com:sagar2602/E-Amazon.git (fetch)
origin  git@github.com:sagar2602/E-Amazon.git (push)
personal        https://mrt14august@github.com/sagar2602/E-Amazon.git (fetch)
personal        https://mrt14august@github.com/sagar2602/E-Amazon.git (push)


Backend/backend-go/controllers/personController.go
Backend/backend-go/routes/routes.go