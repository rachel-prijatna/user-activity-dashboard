package main

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"testing"
)

func TestUsersHandler(t *testing.T) {
	req := httptest.NewRequest("GET", "/api/users", nil)
	w := httptest.NewRecorder()

	usersHandler(w, req)

	resp := w.Result()
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		t.Fatalf("Expected status 200 OK, got %d", resp.StatusCode)
	}

	var users []User
	err := json.NewDecoder(resp.Body).Decode(&users)
	if err != nil {
		t.Fatalf("Failed to decode response: %v", err)
	}

	if len(users) == 0 {
		t.Fatalf("Expected non-empty users list")
	}

	// Optional: check specific fields
	if users[0].Name == "" {
		t.Errorf("Expected user name to be non-empty")
	}
}
