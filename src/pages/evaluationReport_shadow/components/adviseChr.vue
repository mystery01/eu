<template>
  <div class="adviseChr">
    <ReportTitle :title=title />
    <div class="keyWord" v-for='(ele,index) in themeList' :key=index>
        <p>{{ele.name}}</p>
        <div class="content">
          <p class="childActionList" v-for='(item) in ele.childActionList' :key=item><span class="radius"></span>{{item}}</p>
          <div v-if='ele.childExampleList.length>0'>
            <p class="childActionTitle">一些实例参考</p>
            <p class="childActionDes" v-for='(ele,index) in ele.childExampleList' :key=index><span class="radius"></span>{{ele}}</p>
          </div>
          <div class="shadow">完整报告解锁后可见</div>
        </div>
    </div>
</div>
</template> 
<script>
import ReportTitle from './reportTitle'
export default {
  props: {
    themeList: Array
  },
  data () {
    return {
      title: '给孩子的行动计划与建议',
      keyWord: [
        {
          key: '可靠',
          value: '信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样'
        },
        {
          key: '可靠',
          value: '信任对你来说很重要。你在意在别人眼中你是否是个负责任的、可信赖的人。你可以说到做到，你一诺千金。 只要答应的事情，一定做到。你喜欢被委任完成某件事，因为你知道这意味着别人认为你是可靠和值得信赖 的。有时候，被要求做更多的事情就像得到一个奖励，因为这意味着人们相信你。你可能已经在家里或学校 里承担特殊的责任。不管是什么，你都想完成。做完并且做对一件事，以及获得老师和家长的称赞，会让你 感受非常好。有些人可能会说你比其他同龄的孩子年龄大，因为你很有责任心。你可以成为其他人的好榜样'
        }
      ]
    }
  },
  computed: {
  },
  watch: {
  },
  created () {
  },
  methods: {
  },
  components: {
    ReportTitle
  }
}
</script>
<style lang="stylus" scoped>
  .adviseChr {
    p {
      margin-top .1rem
      line-height .25rem
    }
    .keyWord {
      .content {
        padding: 0.15rem 0.1rem 0.15rem 0.15rem;
        border: 0.01rem dashed #ffa366;
        border-radius: 0.04rem;
        // padding 0 .1rem .15rem .1rem
        line-height .25rem
        overflow hidden
        position relative
        .shadow {
          position absolute
          left .05rem
          top .5rem
          width 3rem
          height calc(100% - .5rem)
          background rgba(204,204,204, .98)
          display flex
          justify-content center
          align-items center
          font-size .14rem
          color #363a4d
          
        }
        .childActionList {
          font-size .12rem
          color #555B77
          position relative
          .radius {
            position absolute
            top .2rem
            left -.1rem
            margin-top -.1rem
            margin-right .05rem
            display inline-block
            width .04rem
            height .04rem
            background #898C99
          }
        }
        .childActionTitle {
            font-size .14rem
            color #363a4d
        }
        .childActionDes {
          margin-top .02rem
          font-size .12rem
          color #555b77
          position relative
          .radius {
            position absolute
            top .2rem
            left -.1rem
            margin-top -.1rem
            margin-right .05rem
            display inline-block
            width .04rem
            height .04rem
            background #898C99
          }
        }
      }
      p {
        font-size .14rem
        color #363A4D
      }
    }
  }
</style>
