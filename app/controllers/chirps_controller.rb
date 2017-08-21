class ChirpsController < ApplicationController
  def index
    if params[:user_id]
      @chirps = Chirp.where(author_id: params[:user_id])
    else
      @chirps = Chirp.all
    end
  end
end
