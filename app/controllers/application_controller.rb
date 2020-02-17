class ApplicationController < ActionController::Base
  include Pundit
  before_action :configure_permitted_parameters, if: :devise_controller?
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from Pundit::NotDefinedError, with: :user_not_authorized unless Rails.env.development?

  def after_sign_in_path_for(_resource)
    workouts_path
  end

  private

  def user_not_authorized(object)
    flash[:error] = 'You are not authorized to perform this action.'
    puts "Error: #{object}"
    redirect_to(request.referer || root_path)
  end

  def configure_permitted_parameters
    attributes = [:name]
    devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
    devise_parameter_sanitizer.permit(:account_update, keys: attributes)
  end
end
