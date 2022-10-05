<script>
export default {
  props: {
    id: Number,
  },
};
</script>

<template>
  <div>
    <form>
      <input :id="id + 'radio1'" type="radio" name="estrellas" value="5" />
      <label :for="id + 'radio1'">★</label>
      <input :id="id + 'radio2'" type="radio" name="estrellas" value="4" />
      <label :for="id + 'radio2'">★</label>
      <input :id="id + 'radio3'" type="radio" name="estrellas" value="3" />
      <label :for="id + 'radio3'">★</label>
      <input :id="id + 'radio4'" type="radio" name="estrellas" value="2" />
      <label :for="id + 'radio4'">★</label>
      <input :id="id + 'radio5'" type="radio" name="estrellas" value="1" />
      <label :for="id + 'radio5'">★</label>
    </form>
  </div>
</template>

<style>
form {
  width: auto;
  margin: 0 auto;
  height: 50px;
  display: flex;
  justify-content: center;
}

form label {
  font-size: 20px;
}

input[type='radio'] {
  display: none;
}

label {
  color: grey;
}

form {
  direction: rtl;
  unicode-bidi: bidi-override;
}

label:hover,
label:hover ~ label {
  color: var(--yellow);
}

input[type='radio']:checked ~ label {
  color: var(--yellow);
}
</style>
