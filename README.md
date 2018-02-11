# teamc

Soluion implementing a webapp taking problems of FXB Suraksha in concern.

## Getting Started

This solution will be based on NodeJS and MongoDB.
It will act as data collection and analysis platform for the FXB Suraksha and will be consisted of 3-Tier authorisation system.
Including a survey data collection system.

### Prerequisites

NodeJS, MongoDB and its dependencies.

## Deployment

This solution is be hosted on Heroku

> This whole solution is based on the demands of FXB India Suraksha.

### App Structure

Tier - 1 is super admin capable of creating admin, members and recording survey data.
Tier - 2 is admin capable of creating members and recording survey data.
Tier - 3 is member capable of recording survey data.

Each previous tier is capable of reviewing and managing data recorded by next tier.

Survey data can be managed by all tiers irrespective of the person who recorded.
