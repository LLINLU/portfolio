require 'test_helper'

class AboutControllerTest < ActionDispatch::IntegrationTest
  test "should get works" do
    get about_works_url
    assert_response :success
  end

  test "should get service" do
    get about_service_url
    assert_response :success
  end

end
