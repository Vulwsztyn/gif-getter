build-frontend:
	cd frontend && npm install && npm run-script build
deploy: build-frontend
	npm install && node boot.js