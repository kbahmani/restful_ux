require 'spec_helper'

describe UsersController, :type => :controller do

  #rake db:reset
  #rake db:test:prepare

  before(:all) do
    @user = User.new()
    @user.name = 'Jeffrey'
    @user.family = 'Brown'
    @user.email = 'Jeffrey.Brown@spirent.com'
    @user.save
  end

  after(:all) do
    @user = User.all()
    @user.each {|e| e.destroy}
  end


  context "#index" do

    it 'should retrieve all users' do
      get :index
      response.should be_success
      response.code.should eq("200")
    end
  end

end