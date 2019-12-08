module RegistrationsHelper
  def registration_error_messages!
    return '' if @user.errors.empty?

    messages = @user.errors.full_messages.map {|msg| content_tag(:li, msg)}.join
    html = <<-HTML
    <div class="alert alert-danger alert-block"> <button type="button"
    class="close" data-dismiss="alert">x</button>
      #{messages}
    </div>
    HTML

    html.html_safe
  end
end
