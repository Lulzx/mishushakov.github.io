<template>
<section>
 <!-- The input -->
    <div class="query">
        <div class="wrapper">
            <i class="material-icons iicon">keyboard</i><input autocomplete="off" v-model="query" class="queryform" @keyup.enter="submit()" placeholder="Any questions? Type hello and press enter" autofocus type="text">        
        </div>
    </div>

    <div role="progressbar" class="mdc-linear-progress">
        <div class="mdc-linear-progress__buffering-dots"></div>
        <div class="mdc-linear-progress__buffer"></div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
            <span class="mdc-linear-progress__bar-inner"></span>
        </div>
        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
            <span class="mdc-linear-progress__bar-inner"></span>
        </div>
    </div>

    <div class="ai-window">

        <br>
        <br>

        <!-- Chat window -->
        <table v-for="a in answers" class="chat-window">
            <tr>
                <td class="bubble">{{a.result.resolvedQuery}}</td>
            </tr>
            <tr>
                <td>

                    <!-- Bot speech output -->
                    <div v-if="a.result.fulfillment.speech" class="bubble bot">
                        {{a.result.fulfillment.speech}}
                    </div>

                    <!-- Bot message types / Card -->

                    <div v-for="r in a.result.fulfillment.messages">

                        <div class="mdc-card" v-if="r.type == 'basic_card'">
                            <img class="mdc-card__media-item" :src="r.image.url">
                            <section class="mdc-card__primary">
                                <h1 class="mdc-card__title mdc-card__title">{{r.title}}</h1>
                                <br>
                                <h2 class="mdc-card__subtitle">{{r.subtitle}}</h2>
                            </section>
                            <section class="mdc-card__supporting-text">
                                {{r.formattedText}}
                            </section>
                            <section class="mdc-card__actions" v-for="button in r.buttons">
                                <a class="mdc-button mdc-button--compact mdc-card__action" target="_blank" :href="button.openUrlAction.url">{{button.title}} <i class="material-icons openlink">open_in_new</i></a>
                            </section>
                        </div>

                        <!-- Bot message types / List -->

                        <div class="mdc-list-group mdc-card" v-if="r.type == 'list_card'">
                            <h3 class="mdc-list-group__subheader">{{r.title}}</h3>
                            <ul class="mdc-list" v-for="item in r.items">
                                <span class="mdc-list-item__text">
                                    {{item.title}}
                                    <span class="mdc-list-item__text__secondary">{{item.description}}</span>
                                </span>

                                <br>
                                <br>

                            </ul>
                        </div>

                        <!-- Bot message types / Link Chip -->

                        <div v-if="r.type == 'link_out_chip'" class="chips">
                            <a class="suggestion link" :href="r.url" target="_blank">
                                {{r.destinationName}} <i class="material-icons openlink">open_in_new</i>
                            </a>
                        </div>

                        <!-- Bot message types / Suggestion Chip -->

                        <div v-if="r.type == 'suggestion_chips'" class="chips">
                            <div class="suggestion" @click="autosubmit(s.title)" v-for="s in r.suggestions">
                                {{s.title}}
                            </div>
                        </div>

                    </div>
                </td>
            </tr>
        </table>

        <br>
        <p class="copyright" id="bottom">Proudly powered by <a href="https://mish.io/Ushakov">Ushakov</a> & <a href="https://API.ai">API.ai</a></p>

    </div>
</section>
</template>

<style lang="sass">
@import url('https://fonts.googleapis.com/css?family=Roboto')

body
    margin: 0
    background-color: #F5F5F5
    font-family: 'Roboto', sans-serif

.wrapper
    max-width: 500px
    margin-left: auto
    margin-right: auto

.ai-window
    max-width: 500px
    margin-left: auto
    margin-right: auto
    padding: 1rem

.query
    padding: 16px 0px
    background-color: white
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)
    z-index: 999
    position: fixed
    width: 100%

.queryform
    border: 0
    width: 100% - 20%
    margin-left: 60px
    font-size: 16px
    outline: none
    color: rgba(0,0,0,0.8)
    font-weight: 500
    caret-color: red

.wrapper:hover > .iicon
    color: #0057e7

.iicon
    margin-left: 20px
    position: absolute
    color: rgba(0,0,0,0.8)
    cursor: pointer

.chat-window
    width: 100%

.bubble
    max-width: 300px
    background-color: #E1E1E1
    padding: 16px
    border-radius: 8px
    color: rgba(0,0,0,0.7)
    float: right

.bubble.bot
    background-color: white
    float: left

td
    margin-top: 30px
    margin-bottom: 10px

.mdc-card
    background-color: white
    max-width: 300px

.openlink
    vertical-align: middle
    margin-top: -5px
    margin-left: 5px

.mdc-card__media-item
    height: auto
    width: 100%
    margin-top: -5px

.mdc-card__action
    color: #0057e7

.chips
    margin-left: -10px

.suggestion
    margin-top: 20px
    float: left
    margin-left: 10px
    padding: 10px
    border: 2px rgba(0,0,0,0.4) solid
    color: rgba(0,0,0,0.4)
    border-radius: 4px
    cursor: pointer

.suggestion:active
    border: 2px rgba(0,0,0,1) solid
    color: rgba(0,0,0,1)

.suggestion.link
    color: white
    background-color: #0057e7
    border: 2px #0057e7 solid

.suggestion.link:active
    background-color: darken(#0057e7, 10%)
    border: 2px darken(#0057e7, 10%) solid

.copyright
    font-weight: 600
    color: rgba(0,0,0,0.5)

.copyright a
    text-decoration: none
    color: #0057e7

</style>

<script>
import {ApiAiClient} from "api-ai-javascript"
const client = new ApiAiClient({accessToken: 'f7071275f4bc4841b52bcb0759379275'})

export default {
    name: 'home',
    data: function(){
        return {
            answers: [],
            query: '',
            queries: []
        }
    },
    methods: {
        submit(){
            client.textRequest(this.query).then((response) => {
                if (this.query == 'clear') this.answers = []
                
                this.answers.push(response)
                this.queries.push(this.query)
                this.query = ''

                window.scrollTo(0, document.body.scrollHeight)
            })
        },
        autosubmit(suggestion){
            this.query = suggestion
            this.submit()
        }
    }
}
</script>