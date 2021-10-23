---
title: "GitHub Action: Add Environment Variables To The Step That Is Using Them"
published: 'October, 22 2021'
description: 'GitHub Action environment variables must be set in the step that is using them.'
image: '/images/add-environment-variables-to-step-that-use-them.png'
---
For the [fantasy football picker](https://github.com/jasonericdavis/FF_Picker) project that I am working on, a GitHub Action is used to download, parse and upload the stats to a Supabase database. For the action to connect to the database the action needs to know the database URL and database key both of which should be kept a secret.  

GitHub Actions have the ability to pass secrets as environment variables and I used the steps listed at [here](https://docs.github.com/en/actions/security-guides/encrypted-secrets) to pass the secrets as environment variables. Or so I thought. When the action ran the script I had written was unable to connect to the database because the environment variables containing the secrets did not exist. After hours of trying to figure out the problem, I remembered another project that was doing pretty much the same thing that I was doing. So I checked out the way that [open-sauced](https://opensauced.pizza/) ran its [populate-supabase action](https://github.com/open-sauced/actions/blob/62ad19d336b0915be6642043be77b1e926976230/.github/workflows/populate-the-supabase.yml#L28) and it dawned on me, 

> *The environment variables have to be set in the step they are being used in.* 

After correcting the yaml for the action to set the secrets as environment variables in the step that was running the script the action was able to connect to the database.
 ![picture of corrected action](/images/add-environment-variables-to-step-that-use-them.png)