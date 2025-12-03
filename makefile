COMPOSE=docker compose
SCRIPTS=./scripts

deploy: ## Déploiement complet automatisé
	@echo "Déploiement automatique..."
	@chmod +x $(SCRIPTS)/deploy.sh
	@$(SCRIPTS)/deploy.sh