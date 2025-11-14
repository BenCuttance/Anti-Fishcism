<script lang="ts">
</script>

<!-- TODO: Email will need to be replaced with buisness email at later date -->
<section>
	<div id="form-container">
		<form action="" method="post">
			<label for="name">Name:</label>
			<input type="text" id="name" name="name" placeholder="Name" />
			<label for="email">Email:</label>
			<input type="text" id="email" name="email" placeholder="Email" /> 
			<label for="subject">Subject:</label>
			<input type="text" id="subject" name="subject" placeholder="Subject" /> 
			<label for="message">Message:</label>
			<textarea name="message" id="message" placeholder="Message"></textarea>
			<button id="submit-btn">Submit</button>
		</form>
	</div>
</section>

<style>
	* {
		font-family: var(--font-main);
	}

	section {
		width: 100%;
		min-height: 50vh;
		overflow-y: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#form-container {
		width: 100%;
		max-width: 400px;
		padding: 1rem;
	}

	#submit-btn {
		background-color: #000;
		color: #fff;
		padding: 0.5rem 1rem;
		margin: 1.5rem 0;
		border-radius: 12px;
		width: auto;
		min-width: 120px;
		border: none;
		font-size: 1rem;
		font-weight: 600;
		cursor: pointer;
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
		transition: all 0.2s ease-in-out;
		border: 1px solid transparent; /* Transparent border to prevent form from moving upwards when hover border is applied*/
	}

	#submit-btn:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
		transform: translateY(-2px);

	}

	input[type='text'],
	textarea {
		width: 100%;
		padding: 12px;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	label{
		display: block;
		margin: 1.5rem 1.5rem 1px 1px;
	}
</style>
