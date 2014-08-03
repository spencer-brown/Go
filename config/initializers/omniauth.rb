Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '543840455741990', '8f41e48c36e47f66588d677e29d35f0e'
end
