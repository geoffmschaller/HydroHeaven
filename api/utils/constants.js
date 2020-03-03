const EnvironmentTypes = {
	PRODUCTION: 'production',
	DEVELOPMENT: 'development'
};

const InputTypes = {
	NON_NUMERIC_TEXT_INPUT: 'text_input',
	EMAIL_INPUT: 'email_input',
	PHONE_INPUT: 'phone_input'
};

const TokenTypes = {
	AUTH: 'auth',
	RESET_PASSWORD: 'reset_password'
};

const MailerErrors = {
	HOUSE_CONTACT_ERROR: 'house_contact_error',
	CLIENT_CONTACT_ERRROR: 'client_contact_error'
};

const LogErrors = {
	INVALID_AUTH_USER: 'invalid_user',
	PASSWORDS_MISMATCH: 'password_mismatch',
	INVALID_RESET_TOKEN: 'invalid_reset_token',
	EMAIL_AND_TOKEN_EMAIL_MISMATCH: 'email_and_token_email_mismatch',
	TOKEN_AND_STORED_TOKEN_MISMATCH: 'token_and_stored_token_mismatch'
};

const SystemErrors = {
	SYSTEM_ENCRYPTOR_ERROR: 'system_encryptor_error',
	SYSTEM_TOKEN_GENERATOR_ERROR: 'system_token_generator_error'
};

const DBErrors = {
	DB_SET_CONTACT_ERROR: 'db_set_contact_error',
	DB_SET_RESET_TOKEN_ERROR: 'db_set_reset_token_error',
	DB_SET_NEW_PASSWORD_ERROR: 'db_set_new_password_error',
	DB_INVALIDATE_RESET_TOKEN_ERROR: 'db_invalidate_reset_token_error',
	DB_SET_AUTH_TOKEN_ERROR: 'db_set_auth_token_error',
	DB_SET_NEW_USER_ERROR: 'db_set_new_user_error'
};

const IDRules = {
	NUMERIC: 'numeric',
	LOWER: 'lower',
	UPPER: 'upper',
	NUMERIC_LOWER: 'numeric_lower',
	NUMERIC_UPPER: 'numeric_upper',
	NUMERIC_UPPER_LOWER: 'numeric_upper_lower',
	ALPHA: 'alpha',
};


module.exports = {
	InputTypes,
	TokenTypes,
	LogErrors,
	SystemErrors,
	DBErrors,
	EnvironmentTypes,
	MailerErrors,
	IDRules
};