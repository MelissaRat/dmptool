# frozen_string_literal: true

class StaticPagesController < ApplicationController

  include Dmptool::Controller::StaticPages

  def about_us
    dcc_news_feed_url = "http://www.dcc.ac.uk/news/dmponline-0/feed"
    @dcc_news_feed = Feedjira::Feed.fetch_and_parse dcc_news_feed_url
    respond_to do |format|
      format.rss { redirect_to dcc_news_feed_url }
      format.html
    end
  end

  def contact_us
  end

  def roadmap
  end

  def privacy
  end

  def termsuse
  end

  def help
  end

end
