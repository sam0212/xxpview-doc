<style lang="less">
    @import "../styles/article.less";
</style>
<template>
    <div>
        <div class="wrapper">
            <div class="wrapper-header">
                <nav-menu :active-key="activeKey" @on-change="handleNavMenuChange"></nav-menu>
            </div>
            <div class="wrapper-container">
                <Affix class="wrapper-container-tip-out" :offset-top="60" v-if="app.lang === 'zh-CN' && app.adBlock && (!app.userInfo || app.userInfo.vip_grade === 1)">
                    <Alert banner closable type="warning" show-icon>
                        <div class="wrapper-container-tip-title">
                            友情提示
                        </div>
                        <div class="wrapper-container-tip" slot="desc">
                            我们检测到您可能使用了 AdBlock 或 Adblock Plus。iView 是一款开源的免费软件，赞助商广告是开源项目能够持续发展的动力。<br>
                            如果您不想显示赞助商的广告，请在 iView Developer <a href="https://dev.iviewui.com/upgrade" target="_blank">开通付费会员</a> 来设置关闭赞助商广告。
                        </div>
                    </Alert>
                </Affix>
                <Row>
                    <i-col span="4" class="wrapper-navigate">
                        <Navigate :type="activeKey"></Navigate>
                    </i-col>
                    <i-col span="17">
                        <div class="wrapper-content ivu-article">
                            <slot></slot>
                        </div>
                    </i-col>
                    <i-col span="3">
                        <Affix :offset-top="75">
                            <div class="catalogue" v-if="list.length">
                                <!--<card dis-hover>-->
                                    <!--<div class="catalogue-title">-->
                                        <!--<template v-if="lang === 'zh-CN'">目录</template>-->
                                        <!--<template v-else>Catalogue</template>-->
                                    <!--</div>-->
                                    <!--<div class="catalogue-content">-->
                                        <!--<ul>-->
                                            <!--<li v-for="item in list">-->
                                                <!--<a :href="'#' + item.path" @click.stop.prevent="handleClickLink(item.path)">{{ item.title }}</a>-->
                                            <!--</li>-->
                                            <!--<li v-if="need_api">-->
                                                <!--<a href="#API" @click.stop.prevent="handleClickLink('API')">API</a>-->
                                            <!--</li>-->
                                        <!--</ul>-->
                                    <!--</div>-->
                                <!--</card>-->
                                <Anchor show-ink>
                                    <AnchorLink v-for="item in list" :key="item.path" :href="'#' + item.path" :title="item.title" />
                                    <AnchorLink :scroll-offset="140" href="#API" title="API" v-if="need_api" />
                                </Anchor>
                            </div>

                            <template v-if="app.isAdVisible">
                                <div style="margin-top: 20px"></div>
                                <a v-for="item in app.adList2" :href="item.link" :key="item.id" @click="handleAsideAd(item.id)" target="_blank" class="wrapper-aside wrapper-aside-no-padding">
                                    <img :src="item.img">
                                </a>
                                <div class="wrapper-aside-ask">
                                    <Button size="small" type="primary" ghost @click="donate = true">成为赞助商</Button>
                                </div>
                            </template>
                        </Affix>
                    </i-col>
                </Row>
            </div>
        </div>
        <div class="footer">
            <div class="footer-main">
                <Row>
                    <i-col span="5">
                        <h4>
                            <Icon type="logo-github"></Icon>
                            GitHub
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/iview/iview" target="_blank">iView</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-weapp" target="_blank">iView Weapp</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-loader" target="_blank">iView Loader</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-admin" target="_blank">iView Admin</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-doc" target="_blank">iView Doc</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/iview-project" target="_blank">iView Project</a>
                            </li>
                            <li>
                                <a href="https://github.com/iview/vue-cli-plugin-iview" target="_blank">iView Plugin</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5">
                        <h4>
                            <Icon type="ios-link"></Icon>
                            {{ $t('index.links') }}
                        </h4>
                        <ul>
                            <li>
                                <a href="https://dev.iviewui.com/" target="_blank">iView Developer</a> - {{ $t('index.ivu_dev') }}
                            </li>
                            <li>
                                <a href="https://run.iviewui.com/" target="_blank">iView Run</a> - {{ $t('index.ivu_run') }}
                            </li>
                            <li>
                                <row>
                                    <i-col span="5">
                                        <Poptip trigger="hover" title="扫一扫，关注 iView 公众号">
                                            <a href="javascript:void(0)" target="_blank">
                                                <img src="../images/icon-social-wechat.svg" class="footer-social-icon">
                                            </a>
                                            <div slot="content">
                                                <img src="../images/icon-qr-iview.png" class="footer-qr">
                                            </div>
                                        </Poptip>
                                    </i-col>
                                    <i-col span="5">
                                        <Poptip trigger="hover" title="扫一扫，免费加入 QQ 群">
                                            <a href="javascript:void(0)" target="_blank">
                                                <img src="../images/icon-social-qq.svg" class="footer-social-icon">
                                            </a>
                                            <div slot="content">
                                                <img src="../images/qqgroup1.png" class="footer-qr">
                                            </div>
                                        </Poptip>
                                    </i-col>
                                    <i-col span="5">
                                        <Tooltip content="iView 知乎专栏" placement="top">
                                            <a href="https://zhuanlan.zhihu.com/feview" target="_blank">
                                                <img src="../images/icon-social-zhihu.svg" class="footer-social-icon">
                                            </a>
                                        </Tooltip>
                                    </i-col>
                                </row>
                                <row style="padding: 0">
                                    <i-col span="5">
                                        <Tooltip content="Twitter" placement="top">
                                            <a href="https://twitter.com/iViewUI" target="_blank">
                                                <img src="../images/icon-social-twitter.svg" class="footer-social-icon">
                                            </a>
                                        </Tooltip>
                                    </i-col>
                                    <i-col span="5">
                                        <Tooltip content="掘金" placement="top">
                                            <a href="https://juejin.im/user/56fe494539b0570054f2e032" target="_blank">
                                                <img src="../images/icon-social-juejin.svg" class="footer-social-icon footer-social-icon-bg">
                                            </a>
                                        </Tooltip>
                                    </i-col>
                                    <i-col span="5">
                                        <Tooltip content="活动直播间" placement="top">
                                            <a href="https://live.bilibili.com/1353202" target="_blank">
                                                <img src="../images/icon-social-bilibili.svg" class="footer-social-icon">
                                            </a>
                                        </Tooltip>
                                    </i-col>
                                </row>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <h4>
                            <Icon type="ios-chatbubbles"></Icon>
                            {{ $t('index.help') }}
                        </h4>
                        <ul>
                            <li>
                                <a href="https://github.com/iview/iview/releases" target="_blank">{{ $t('index.release') }}</a>
                            </li>
                            <li>
                                <a href="https://segmentfault.com/ls/1650000016424063" target="_blank">{{ $t('index.ivu_course') }}</a>
                            </li>
                            <li>
                                <a href="https://www.iviewui.com/new-issue" target="_blank">{{ $t('index.bug') }}</a>
                            </li>
                            <li>
                                <a href="https://gitter.im/iview/iview" target="_blank">{{ $t('index.chat') }}</a>
                            </li>
                            <li>
                                <a href="https://stackoverflow.com/questions/tagged/iview" target="_blank">StackOverflow</a>
                            </li>
                            <li>
                                <a href="https://segmentfault.com/t/iview" target="_blank">SegmentFault</a>
                            </li>
                        </ul>
                    </i-col>
                    <i-col span="5" offset="2">
                        <div class="footer-aside">
                            <div class="footer-logo">
                                <img src="../images/logo.png">
                            </div>
                            <div class="footer-author">
                                <a href="https://www.maoyun.tv/?ref=iview" target="_blank">
                                    <img src="../images/icon-maocloud.svg">
                                </a>
                            </div>
                            <div class="footer-version">
                                <!--<p>{{ $t('index.current_version') }}</p>-->
                                <p>提供 CDN 赞助</p>
                            </div>
                        </div>
                    </i-col>
                </Row>
            </div>
        </div>
        <!--<Modal v-model="donate" v-if="lang === 'zh-CN'" title="支持 iView 的开发" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">-->
            <!--<div class="ivu-article">-->
                <!--<p>iView 是采用 MIT 许可的开源项目，您可以在个人或企业项目中免费使用。不过，如果您觉得 iView 对您的项目带来了帮助，提高开发效率，可以用捐助来表示您的谢意：)</p>-->
                <!--<p>您可以用公司的名义进行赞助，赞助信息将在文档页展示。联系邮箱 <a href="mailto:admin@aresn.com">admin@aresn.com</a></p>-->
                <!--<h3>个人可使用 微信 或 支付宝 捐助：</h3>-->
                <!--<div>-->
                    <!--<img src="../images/pay.png" style="width: 100%">-->
                <!--</div>-->
            <!--</div>-->
        <!--</Modal>-->
        <Modal v-model="donate" title="成为 iView 赞助商" @on-ok="handleModalClose" @on-cancel="handleModalClose" width="600" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>如果您有品牌推广、活动推广、招聘推广、社区合作的需求，欢迎联系我们。</p>
                <p>联系邮箱 <a href="mailto:admin@aresn.com">admin@aresn.com</a> 咨询文档 PV、UV 及投放价格。</p>
                <p>位置如下图所示：</p>
                <div>
                    <Carousel v-if="donate" v-model="adCarousel" autoplay :autoplay-speed="5000" dots="outside">
                        <CarouselItem>
                            <div class="demo-carousel" style="height: 300px">
                                <img src="../images/ad-demo1.png" style="width: 100%">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel" style="height: 300px;">
                                <img src="../images/ad-demo3.png" style="width: 100%">
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div class="demo-carousel" style="height: 300px;">
                                <img src="../images/ad-demo2.png" style="width: 100%">
                            </div>
                        </CarouselItem>
                    </Carousel>
                </div>
            </div>
        </Modal>
        <!--<Modal v-model="donate" v-if="lang !== 'zh-CN'" title="Donate iView project" @on-ok="handleModalClose" @on-cancel="handleModalClose" class-name="vertical-center-modal">-->
            <!--<div class="ivu-article">-->
                <!--<p>iView is an open source project with MIT licenses that you can use for free in your personal or business projects. However, if you feel that iView has helped your project to improve development efficiency, you can use donations to express your gratitude: )</p>-->
                <!--<h3>Use Wechat or Alipay to donate：</h3>-->
                <!--<div>-->
                    <!--<img src="../images/pay.png" style="width: 100%">-->
                <!--</div>-->
            <!--</div>-->
        <!--</Modal>-->
        <Modal v-model="ask" title="免费加入 iView 官方QQ群参与讨论" class-name="vertical-center-modal">
            <div class="ivu-article">
                <p>免费加入官方QQ讨论群，交流 iView 技术问题。</p>
                <p>群号：<strong>71434987</strong></p>
                <p>二维码：</p>
                <p>
                    <img src="../images/qqgroup3.png" style="display: block;width: 50%;margin: 0 auto;">
                </p>
                <p>
                    <Alert show-icon>仅限开发者加入，请勿讨论与技术无关的问题，比如发招聘信息等。</Alert>
                </p>
            </div>
        </Modal>
        <!-- todo 提问 -->
        <!--<a href="https://dev.iviewui.com/issues" target="_blank" class="ask-question" v-if="lang === 'zh-CN'" @click="handleClickAsk">-->
            <!--<Icon type="ios-help-circle" size="14" />-->
            <!--<p>提问</p>-->
        <!--</a>-->
    </div>
</template>
<script>
    import Navigate from './navigate.vue';
    import navigate from '../config/navigate';
    import navMenu from './menu.vue';
    import bus from './bus';

    export default {
        inject: ['app'],
        components: {
            Navigate,
            navMenu
        },
        data () {
            return {
                list: [],
                need_api: false,
                donate: false,
                ask: false,
                activeKey: '',
                lang: this.$lang,
                adCarousel: 0,
                ad_index: this.app.ad_index
            }
        },
        methods: {
            handleModalClose () {
                this.donate = false;
            },
            handleAskClose () {
                this.ask = false;
            },
            updateActiveNav () {
                const componentList = [
                    '/docs/guide/install',
                    '/docs/guide/install-en',
                    '/docs/guide/start',
                    '/docs/guide/start-en',
                    '/docs/guide/i18n',
                    '/docs/guide/i18n-en',
                    '/docs/guide/theme',
                    '/docs/guide/theme-en',
                    '/docs/guide/iview-loader',
                    '/docs/guide/iview-loader-en',
                    '/overview',
                    '/overview-en',
                    '/docs/guide/update',
                    '/docs/guide/update-en',
                    '/docs/guide/global',
                    '/docs/guide/global-en',
                ];

                const route = this.$route.path;
                if (route.indexOf('component') > -1 || componentList.indexOf(route) > -1) {
                    this.activeKey = 'component';
                } else if (route.indexOf('practice') > -1) {
                    this.activeKey = 'practice';
                } else if (route.indexOf('live') > -1) {
                    this.activeKey = 'live';
                }  else {
                    this.activeKey = 'guide';
                }
            },
            handleNavMenuChange (val) {
                this.activeKey = val;
            },
            // 控制锚点跳转
            handleClickLink (id) {
                const top = document.getElementById(id).offsetTop;
                window.location.hash = id;
                let scroll_top = top + 15;
                if (id === 'API') scroll_top -= 150;
                window.scrollTo(0, scroll_top);
            },
            handleAsideAd (name, isQQGroup = false) {
                _hmt.push(['_trackEvent', name, 'click']);
                if (isQQGroup) {
                    this.ask = true;
                }
            },
            handleClickAsk () {
                _hmt.push(['_trackEvent', 'ask_issue_dev', 'click']);
            }
        },
        created () {
            this.lang = this.$lang;
        },
        mounted () {
            this.updateActiveNav();

            const examples = this.$slots.default[0].elm.querySelectorAll('.example');

            // 有示例时，显示示例的目录，没有，显示标题为目录
            if (examples.length) {
                this.need_api = true;
                for (let i = 0; i < examples.length; i++) {
                    const path = examples[i].querySelectorAll('header span a')[0].getAttribute('href').replace('#', '');
                    const title = examples[i].querySelectorAll('header span a')[0].getAttribute('data-title').replace('#', '');
                    this.list.push({
                        title: title,
                        path: path
                    });
                }
            } else {
                this.need_api = false;
                const headers = this.$slots.default[0].elm.querySelectorAll('.anchor');
                for (let i = 0; i < headers.length; i++) {
                    const title = headers[i].querySelectorAll('h2')[0];
                    if (title) {
                        const title_name = title.innerHTML;
                        const path = headers[i].querySelectorAll('h2')[0].getAttribute('id');
                        this.list.push({
                            title: title_name,
                            path: path
                        });
                    }
                }
            }

            bus.$on('on-donate-show', () => {
                this.donate = true;
            })
        }
    }
</script>