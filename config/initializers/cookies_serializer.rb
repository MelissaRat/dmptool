# Be sure to restart your server when you modify this file.

# Rails.application.config.action_dispatch.cookies_serializer = :hybrid
Rails.application.config.session_store :cookie_store, key: '_dmptool'

Rails.application.config.action_dispatch.cookies_serializer = :json