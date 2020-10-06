require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get works" do
    get pages_works_url
    assert_response :success
  end

  test "should get about" do
    get pages_about_url
    assert_response :success
  end

  test "should get services" do
    get pages_services_url
    assert_response :success
  end

end
