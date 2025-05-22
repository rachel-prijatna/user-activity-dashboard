package main

import (
	"encoding/json"
	"net/http"

	"github.com/rs/cors"
)

type User struct {
	Name                string `json:"name"`
	CreateDate          string `json:"createDate"`
	PasswordChangedDate string `json:"passwordChangedDate"`
	LastAccessDate      string `json:"lastAccessDate"`
	MfaEnabled          bool   `json:"mfaEnabled"`
}

func usersHandler(w http.ResponseWriter, r *http.Request) {
	users := []User{
		{"Foo Bar1", "Oct 1 2020", "Nov 1 2024", "Mar 30 2025", true},
		{"Foo1 Bar1", "Sep 20 2019", "Sep 22 2019", "Feb 8 2025", false},
		{"Foo2 Bar2", "Feb 3 2022", "Feb 3 2022", "Feb 12 2025", false},
		{"Foo3 Bar3", "Mar 7 2023", "Mar 10 2025", "May 1 2025", true},
		{"Foo Bar4", "Apr 8 2018", "Jun 12 2024", "Apr 4 2025", false},
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(users)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/users", usersHandler)

	handler := cors.AllowAll().Handler(mux)
	http.ListenAndServe(":8080", handler)
}
