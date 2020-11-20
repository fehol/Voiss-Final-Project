import axios from 'axios';

function getRequestParams(email) {
  // here I get the .env information
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1];

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  // here you can add different params from https://mailchimp.com/developer/reference/lists/list-members/
  const data = {
    email_address: email,
    status: 'subscribed',
  };

  // Api key needs to be encoded in base 64 format (see documentation)
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64');
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({
      error: 'Forgot to add your email?',
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await axios.post(url, data, { headers });

    // Success
    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error: `Oops, that didn't work... Send me an email at keith@voss.com and I'll add you to the list.`,
    });
  }
};
