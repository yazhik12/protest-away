# Protest Away

## The Challenge

How do we enable people that are at risk of COVID-19 or are unable to protest in-person support the movement through tech?

## Why does this matter?

Physical presence as a protest is a lot more risky for people at risk of getting COVID. This includes the elderly population, people with underlying conditions, or people who live with someone who is at-risk. (Non at risk individuals can also use this tool.) CDC reports “An estimated 60 percent of American adults have at least one chronic medical condition.” (Source: https://www.cdc.gov/media/releases/2020/p0625-update-expands-covid-19.html)
This is a huge population of people who are now putting themselves at risk by protesting anyways, or keeping themselves from participating in activism.

How do we keep people connected to issues that matter to them, even if they cannot go out and protest?
How do we keep people engaged in activism after the protest is over?

## Assumptions

This is not a replacement of protest, but supports it.

## The Solution

A web application that uses 2 types of data

1. aggregated data about trending hashtags from Twitter (hashtags related to BLM movement/black issues) and
1. incidents reported on our website, to link people who cannot protest to actions they can take from their homes

Our tool offers ways of tackling social, political, and economic activism.

## Key User Group

1. People who want to report a problem
1. People who don't know how to help/cant help bc of COVID (our focus user for the presentation)
1. Civic organizations who want to get connected with and act on local occurrences of racism

## Technical resources

https://stackoverflow.com/questions/51689113/instagram-get-posts-with-hashtag

JS library for getting Twitter posts by hashtag
https://www.tweetjs.com/

https://stackoverflow.com/questions/50147108/twitter-api-searching-by-hashtag

## User Stories

- As a user I want to Report incidents of racism directly to our platform.
- As a user I want to Select an incident and find out how you can take actionable steps to get justice.
- As a user I want to Find civic groups in your community to get involved with.

### With reported incidents

1. As a User, when I arrive at the first page I should be able to see the trending hashtags- the top 5 from Twitter ,.The set of hashtags in consideration will be predefined.
2. As a User, I will see an updated scream when the screen refreshes
3. As a User, I should be able to query according to a search criteria and read incidents reported. When i click on a particular record, I should be able to read the entire description

## Landing Page

(With Twitter Posts)

1. As a User, I should be able to see a list of incidents as sourced from Twitter
1. As a User , I should be able to click on the button “Take Action”
1. As an Admin, I should be able to delete the records if they are found not appropriate
1. As a User, I should be able to enter a new Incident by going to the Reported Incidents tab.I have to fill in the following fields while reporting the incident

Name
Location - city, state
Date
Type of incident (police brutality, workplace discrimination,
Description of incident
Link to social media post, if any (maybe later)
Attach image or video

5. As a User I can navigate to the Take Actions Button
6. As a User, i should be able to refer my incidents to social media sites.
   As a User, I should be able to see a list of organizations/authorities that support this movement

![](src/images/Screen%20Shot%202020-07-29%20at%208.17.54%20PM.png)

## Take Action Page

1. As a User, I can Sign a Petition

As a User, I should be able to sign a petition that supports my cause. This will launch me to the website and i can go ahead and sign the petition

https://act.colorofchange.org/sign/justiceforfloyd_george_floyd_minneapolis?source=coc_main_website
Change.org
Avaaz.org
IPetitions.org

2. As a User, I can Call your local representative

The API gets called and provides a list of representatives in your area
(Get reference from KHoury)

3. As a User, I can Donate to an affiliated civic group This tab will open up a page that will have the links of websites that collect Donation,

Color of Change https://secure.actblue.com/contribute/page/support-us

Black LIves Matter https://secure.actblue.com/donate/ms_blm_homepage_2019

![](src/images/Screen%20Shot%202020-07-29%20at%208.19.54%20PM.png)

## Report an Incident Page

1. As a user I should be able to report an incident.
1. As a user I should be able to report an incident and enable the checkbox that says I want the incident to be reported.
1. This takes me to the Take Action Page

![](src/images/Screen%20Shot%202020-07-29%20at%208.18.14%20PM.png)

## Connect With Help Page

1. As an Admin, I should be able to load incidents from other sources
1. As an Admin, I should be able to enter new categories
1. As an Admin, I should be able to draw analytics geographically

![](src/images/Screen%20Shot%202020-07-29%20at%208.18.30%20PM.png)

## APP link

[Protest-Away](http://virtual-protest.org/)
