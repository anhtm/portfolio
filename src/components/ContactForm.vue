<template>
	<div class="form-container">
    <h1 class="title is-spaced is-4 is-pulled-left">Send me a message</h1>
    <form action="https://formspree.io/anhtm.mtl@gmail.com" method="POST">
    <div class="field">
      <div class="control">
        <input class="input" name="sender-name" type="text" required placeholder="Your name">
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" name="sender-email" type="email" required placeholder="Your email"/>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <input class="input" name="sender-subject" type="text" required placeholder="Subject"/>
      </div>
    </div>
    <div class="field">
      <div class="control">
         <textarea class="textarea" name="sender-message" required placeholder="Hi Minh! ..."/>
      </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-warning">Submit</button>
      </div>
    </div>
  </form>
	</div>
</template>

<script>
export default {
	name: 'contact-form',

	data() {
		return {
			
		}
	},
}
</script>

<style scoped>
</style>