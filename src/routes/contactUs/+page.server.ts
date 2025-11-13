import { GOOGLE_EMAIL } from '$env/static/private';
import transporter from '$lib/emailSetup.server';

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();
			const email = formData.get('email');
			const name = formData.get('name');
			const subject = formData.get('subject');
			const body = formData.get('message');

			let html = `<h1> From ${name} </h1> <p> ${body} </p> <br/> <p> From ${email}</p>`;

			const message = {
				from: email,
				to: GOOGLE_EMAIL,
				subject: subject,
				text: body,
				html: html,
				replyTo: email
			};

			const sendEmail = async (message: any) => {
				await new Promise((resolve, reject) => {
					transporter.sendMail(message, (err, info) => {
						if (err) {
							console.error(err);
							reject(err);
						} else {
							resolve(info);
						}
					});
				});
			};

			await sendEmail(message);

			return {
				success: 'Email sent'
			};
		} catch (error) {
			console.error(error);
		}
	}
};
