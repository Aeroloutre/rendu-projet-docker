COMPOSE=docker compose
SCRIPTS=./scripts

sign: ## Signer les images
	@echo "Signature des images..."
	@chmod +x $(SCRIPTS)/sign-images.sh
	@$(SCRIPTS)/sign-images.sh

deploy: ## Déploiement complet automatisé
	@echo "Déploiement automatique..."
	@chmod +x $(SCRIPTS)/deploy.sh
	@$(SCRIPTS)/deploy.sh