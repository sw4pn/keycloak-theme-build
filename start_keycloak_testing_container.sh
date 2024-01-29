#!/usr/bin/env bash
# If you want to test with Keycloak version prior to 23 use the retrocompat-keycloakify-starter-keycloak-theme-5.2.0.jar

docker rm keycloak-testing-container || true

cd "D:\Learn\keycloak\keycloakify-starter\build_keycloak"

docker run \
   -p 8080:8080 \
   --name keycloak-testing-container \
   -e KEYCLOAK_ADMIN=admin \
   -e KEYCLOAK_ADMIN_PASSWORD=admin \
   -v "$(pwd)\target\keycloakify-starter-keycloak-theme-5.2.0.jar":"/opt/keycloak/providers/keycloakify-starter-keycloak-theme-5.2.0.jar" \
   -v "$(pwd)/src/main/resources/theme/account-v1":"/opt/keycloak/themes/account-v1":rw \
   -v "$(pwd)/src/main/resources/theme/account-v1;C":"/opt/keycloak/themes/account-v1;C":rw \
   -v "$(pwd)/src/main/resources/theme/keycloakify-starter":"/opt/keycloak/themes/keycloakify-starter":rw \
   -v "$(pwd)/src/main/resources/theme/keycloakify-starter;C":"/opt/keycloak/themes/keycloakify-starter;C":rw \
   -it quay.io/keycloak/keycloak:23.0.0 \
   start-dev --features=declarative-user-profile
