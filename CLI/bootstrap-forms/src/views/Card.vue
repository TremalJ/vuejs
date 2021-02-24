<template>
  <div class="mt-5">
      <b-button variant="success">Texto</b-button>
      <b-button variant="info">Texto</b-button>
      <b-button variant="danger">Texto</b-button>
      <b-button variant="primary">Texto</b-button>
      <b-button variant="success">Texto</b-button>
      <b-button variant="warning">Texto</b-button>
      <b-button variant="dark">Texto</b-button>

    <b-row class="mt-5">
        <b-col>
            <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </b-col>
        <b-col>
            <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </b-col>
        <b-col>
            <b-card
            title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </b-col>
    </b-row>
        
  </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>