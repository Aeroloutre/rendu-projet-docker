FROM node:20-alpine AS builder

WORKDIR /app

COPY index.html script.js ./

FROM nginx:1.25-alpine

#La, pareil que pour le back, on crée un user non root et on lui donne uniquement les droits nécéssaire pour écrire les logs etc...
RUN addgroup -g 1001 -S nginx-user && \
    adduser -S nginx-user -u 1001 && \
    chown -R nginx-user:nginx-user /var/cache/nginx && \
    chown -R nginx-user:nginx-user /var/log/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx-user:nginx-user /var/run/nginx.pid

COPY --from=builder --chown=nginx-user:nginx-user /app /usr/share/nginx/html

COPY --chown=nginx-user:nginx-user nginx.conf /etc/nginx/nginx.conf

#On utilise l'utilisateur non root
USER nginx-user

EXPOSE 8080

#healthcheck sur le port du back 
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]