<template>
  <div class="d-flex flex-row nly-container">
    <div region="nly-aside" :class="nlyAsideClass">
      <!-- brand -->
      <a href="#" class="nly-container-aside-brand">
        <img
          :src="logo"
          alt="Logo"
          class="nly-container-aside-brand-image"
          style="opacity: .8"
        />
        <span class="nly-container-aside-brand-text">Nejinn Lerity Admin</span>
      </a>

      <!-- Sidebar -->
      <div class="nly-container-aside-sidebar-scrollbar">
        <div class="nly-container-aside-sidebar">
          <div
            class="mt-3 pb-3 mb-3 d-flex nly-container-aside-sidebar-user-panel"
          >
            <div class="nly-container-aside-sidebar-user-panel-image">
              <img
                :src="logo"
                class="nly-container-aside-sidebar-user-panel-image-img"
                alt="userimg"
              />
            </div>
            <div class="nly-container-aside-sidebar-user-panel-info">
              <a
                href="#"
                class="nly-container-aside-sidebar-user-panel-info-block"
                >姚欣</a
              >
            </div>
          </div>

          <!-- Sidebar Menu -->
          <b-nav vertical class="nly-container-aside-sidebar-menu">
            <b-nav
              role="tablist"
              class="nly-container-aside-sidebar-menu-nav nav-pills flex-column"
            >
              <b-nav-item
                active
                link-classes="nly-container-aside-sidebar-menu-nav-item-nav-link"
                class="nly-container-aside-sidebar-menu-nav-item"
              >
                <i
                  class="nly-container-aside-sidebar-menu-nav-item-icon fas fa-th"
                ></i>
                <p class="nly-container-aside-sidebar-menu-nav-item-nav-link-p">
                  仪表盘
                </p>
              </b-nav-item>
              <b-nav-item
                link-classes="nly-container-aside-sidebar-menu-nav-item-open-nav-link"
                class="nly-container-aside-sidebar-menu-nav-item-open"
                v-b-toggle.accordion-1
                active
              >
                <i
                  class="nly-container-aside-sidebar-menu-nav-item-open-icon fas fa-tachometer-alt"
                ></i>
                <p
                  class="nly-container-aside-sidebar-menu-nav-item-open-nav-link-p"
                >
                  我是食物
                  <i
                    class="when-opened nly-container-aside-sidebar-menu-nav-item-open-icon-right fas fa-angle-left"
                  ></i>
                  <i
                    class="when-closed nly-container-aside-sidebar-menu-nav-item-open-icon-right-off fas fa-angle-left"
                  ></i>
                </p>
              </b-nav-item>
              <ul class="nly-container-aside-sidebar-menu-nav">
                <b-collapse
                  id="accordion-1"
                  visible
                  accordion="my-accordion"
                  role="tabpanel"
                  tag="li"
                  class="nly-container-aside-sidebar-menu-nav-item-open"
                >
                  <b-nav-item
                    active
                    link-classes="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link"
                    class="nly-container-aside-sidebar-menu-nav-item-open"
                  >
                    <i
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon fas fa-th"
                    ></i>
                    <p
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link-p"
                    >
                      我是猕猴桃
                    </p>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link"
                    class="nly-container-aside-sidebar-menu-nav-item-open"
                  >
                    <i
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon fas fa-th"
                    ></i>
                    <p
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link-p"
                    >
                      我是黄金香蕉
                    </p>
                  </b-nav-item>
                </b-collapse>
              </ul>

              <b-nav-item
                link-classes="nly-container-aside-sidebar-menu-nav-item-open-nav-link"
                class="nly-container-aside-sidebar-menu-nav-item-open"
                v-b-toggle.accordion-2
              >
                <i
                  class="nly-container-aside-sidebar-menu-nav-item-open-icon fas fa-tachometer-alt"
                ></i>
                <p
                  class="nly-container-aside-sidebar-menu-nav-item-open-nav-link-p"
                >
                  我是颜色
                  <i
                    class="when-opened nly-container-aside-sidebar-menu-nav-item-open-icon-right fas fa-angle-left"
                  ></i>
                  <i
                    class="when-closed nly-container-aside-sidebar-menu-nav-item-open-icon-right-off fas fa-angle-left"
                  ></i>
                </p>
              </b-nav-item>
              <ul class="nly-container-aside-sidebar-menu-nav">
                <b-collapse
                  id="accordion-2"
                  accordion="my-accordion"
                  role="tabpanel"
                  tag="li"
                  class="nly-container-aside-sidebar-menu-nav-item-open"
                >
                  <b-nav-item
                    link-classes="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link"
                    class="nly-container-aside-sidebar-menu-nav-item-open"
                  >
                    <i
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon fas fa-th"
                    ></i>
                    <p
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link-p"
                    >
                      我是黄色
                    </p>
                  </b-nav-item>
                  <b-nav-item
                    link-classes="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link"
                    class="nly-container-aside-sidebar-menu-nav-item-open"
                  >
                    <i
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon fas fa-th"
                    ></i>
                    <p
                      class="nly-container-aside-sidebar-menu-nav-item-open-nav-item-link-p"
                    >
                      我是绿色
                    </p>
                  </b-nav-item>
                </b-collapse>
              </ul>
            </b-nav>
          </b-nav>

          <!-- /.sidebar-menu -->
        </div>
      </div>
    </div>
    <div class="center flex-fill nly-container-center-scrollbar">
      <div region="nly-container-center" class="nly-container-center">
        <div class="nly-container-center-content">
          <div
            region="nly-container-center-content-header"
            class="nly-container-center-content-header"
          >
            <div>
              <b-navbar toggleable="lg" type="dark">
                <button
                  type="button"
                  aria-label="Toggle navigation"
                  aria-controls="self"
                  aria-expanded="false"
                  class="navbar-toggler nly-container-center-content-main-aside-toggle"
                  @click="changeaside"
                >
                  <span>
                    <b-icon icon="bar-chart" />
                  </span>
                </button>

                <button
                  type="button"
                  aria-label="Toggle navigation"
                  aria-controls="self"
                  aria-expanded="false"
                  class="navbar-toggler nly-container-center-content-main-aside-open-toggle"
                  @click="changeopen"
                >
                  <span>
                    <b-icon icon="bar-chart" />
                  </span>
                </button>

                <b-navbar-brand
                  href="#"
                  class="nly-container-center-content-header-brand m-auto"
                >
                  <img
                    :src="logo"
                    alt="nejinn lerity admin"
                    class="nly-container-center-content-header-brand-img"
                  />
                  <span class="nly-container-center-content-header-brand-text">
                    NLY
                  </span>
                </b-navbar-brand>

                <b-navbar-toggle
                  target="nav-collapse"
                  class="nly-container-center-content-main-aside-open-toggle"
                ></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                  <b-navbar-nav>
                    <b-nav-item href="#">Dashboard</b-nav-item>
                    <b-nav-form>
                      <b-form-input
                        size="sm"
                        class="ml-sm-3"
                        placeholder="Search"
                      ></b-form-input>
                      <b-button
                        size="sm"
                        class="my-2 my-sm-0 ml-sm-1"
                        type="submit"
                        >Search</b-button
                      >
                    </b-nav-form>
                  </b-navbar-nav>

                  <!-- Right aligned nav items -->
                  <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown text="Lang" right>
                      <b-dropdown-item href="#">EN</b-dropdown-item>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown
                      right
                      no-caret
                      toggle-class="nly-container-center-content-header-navbar-nav-dropdown-navlink"
                    >
                      <template v-slot:button-content>
                        <b-icon icon="person" />
                      </template>
                      <b-dropdown-item href="#">ES</b-dropdown-item>
                      <b-dropdown-item href="#">RU</b-dropdown-item>
                      <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </div>
          </div>
          <div
            region="nly-container-center-content-main"
            class="center flex-fill flex-column nly-container-center-content-main"
          >
            <b-breadcrumb>
              <div
                class="nly-container-center-content-main-breadcrumb-left mr-auto col-sm-6 "
              >
                <b-icon
                  icon="house-fill"
                  scale="1.25"
                  shift-v="1.25"
                  aria-hidden="true"
                ></b-icon>
                Home
              </div>

              <div
                class="nly-container-center-content-main-breadcrumb-right col-sm-6 justify-content-sm-end align-self-center "
              >
                <b-breadcrumb-item href="#home">
                  <b-icon
                    icon="house-fill"
                    scale="1.25"
                    shift-v="1.25"
                    aria-hidden="true"
                  ></b-icon>
                  Home
                </b-breadcrumb-item>
                <b-breadcrumb-item href="#foo">Foo</b-breadcrumb-item>
                <b-breadcrumb-item href="#bar">Bar</b-breadcrumb-item>
                <b-breadcrumb-item active>Baz</b-breadcrumb-item>
              </div>
            </b-breadcrumb>
          </div>
          <div
            region="nly-container-center-content-foot"
            class="nly-container-center-content-foot"
          >
            南
          </div>
          <div
            class="nly-container-aside-max-open-overlay"
            v-show="overlay"
            @click="changeoverlay"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../assets/logo.png";
export default {
  data() {
    return {
      nlyAsideClass: "nly-container-aside-max",
      logo,
      overlay: false,
      openMenu: true
    };
  },
  methods: {
    changeopen() {
      if (this.nlyAsideClass == "nly-container-aside-max") {
        this.nlyAsideClass = "nly-container-aside-max-open";
        this.overlay = true;
      } else if (this.nlyAsideClass == "nly-container-aside-mini") {
        this.nlyAsideClass = "nly-container-aside-max-open";
        this.overlay = true;
      } else {
        this.nlyAsideClass = "nly-container-aside-max";
        this.overlay = false;
      }
    },
    changeaside() {
      this.nlyAsideClass =
        this.nlyAsideClass == "nly-container-aside-mini"
          ? "nly-container-aside-max"
          : "nly-container-aside-mini";
    },
    changeoverlay() {
      if (this.overlay == true) {
        this.nlyAsideClass = "nly-container-aside-max";
        this.overlay = false;
      }
    },
    changeMenuStatus() {
      this.openMenu = this.openMenu == true ? false : true;
    }
  },
  watch: {
    // 检测罩层变化
    nlyAsideClass(newvar) {
      if (newvar != "nly-container-aside-max-open") {
        this.overlay = false;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@basezindex: 10;

// 边侧容器
.nly-container {
  height: 100%;
  width: 100%;
  background-color: #343a40;
}

// 默认大屏边侧栏
.nly-container-aside-max {
  height: 100%;
  width: 16rem;
  background-color: #343a40;
  transition: 0.5s;

  .nly-container-aside-brand:hover {
    color: #ffffff;
    text-decoration: none;
  }
  .nly-container-aside-brand {
    display: block;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.8125rem 0.5rem;
    transition: width 0.3s ease-in-out;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #4e5257;
    position: static;

    .nly-container-aside-brand-image {
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 33px;
      width: auto;
      border-radius: 50%;
      background-color: #ffffff00;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) !important;
    }

    .nly-container-aside-brand-text {
      font-weight: 300;
      display: inline-block;
      margin-left: 0;
      opacity: 1;
      visibility: visible;
      transition: margin-left 0.3s linear, opacity 0.3s ease,
        visibility 0.3s ease;
    }
  }

  .nly-container-aside-sidebar-scrollbar {
    overflow: auto;
    height: calc(~"100vh - 58px");
  }

  .nly-container-aside-sidebar:hover {
    overflow: auto;
    // margin-right: 0rem;
    // padding-right: 0.5rem;
  }

  .nly-container-aside-sidebar::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0.5rem; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0.5rem;
  }
  .nly-container-aside-sidebar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #4374b1;
  }

  .nly-container-aside-sidebar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #4e525741;
  }

  .nly-container-aside-sidebar {
    height: calc(100% - 0.7rem);
    overflow: hidden;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    // margin-right: 0.5rem;
    padding-top: 0;

    .nly-container-aside-sidebar-user-panel {
      position: relative;
      border-bottom: 1px solid #4e5257;
      .nly-container-aside-sidebar-user-panel-image {
        display: inline-block;
        padding-left: 0.8rem;
        .nly-container-aside-sidebar-user-panel-image-img {
          max-height: 2.1rem;
          border-radius: 50%;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23) !important;
        }
      }
      .nly-container-aside-sidebar-user-panel-info {
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        padding: 5px 5px 5px 10px;
        transition: margin-left 0.3s linear, opacity 0.3s ease,
          visibility 0.3s ease;
        .nly-container-aside-sidebar-user-panel-info-block {
          display: block !important;
          color: rgba(255, 255, 255, 0.8);
        }
        .nly-container-aside-sidebar-user-panel-info-block:hover {
          display: block !important;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
    .nly-container-aside-sidebar-menu {
      margin-top: 0.5rem !important;
      .nly-container-aside-sidebar-menu-nav {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        margin-top: 0;
      }

      .nly-container-aside-sidebar-menu-nav-item {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
          .nly-container-aside-sidebar-menu-nav-item-nav-link-p {
            transition: margin-left 0.3s linear, opacity 0.3s ease,
              visibility 0.3s ease;
            display: inline-block;
            margin: 0;
            display: inline-block;
            opacity: 1;
            visibility: visible;
          }
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open.collapsed {
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          .when-opened {
            display: none;
          }
          .when-closed {
            display: block;
          }
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
          .when-closed {
            display: none;
          }
          .when-opened {
            display: block;
          }
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
        .nly-container-aside-sidebar-menu-nav-item-open-icon-right-off {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link.active {
          background-color: rgba(255, 255, 255, 0.9);
          color: #343a40;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon.fas {
          font-size: 1.1rem;
        }
      }
    }
  }
}

// 收起边侧栏
.nly-container-aside-mini {
  height: 100%;
  width: 4.5rem;
  background-color: #343a40;
  transition: 0.5s;

  .nly-container-aside-brand:hover {
    color: #ffffff;
    text-decoration: none;
  }
  .nly-container-aside-brand {
    display: block;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.8125rem 0.5rem;
    transition: width 0.3s ease-in-out;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #4e5257;
    position: static;

    .nly-container-aside-brand-image {
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 33px;
      width: auto;
      border-radius: 50%;
      background-color: #ffffff00;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) !important;
    }

    .nly-container-aside-brand-text {
      margin-left: -10px;
      opacity: 0;
      visibility: hidden;
      font-weight: 300;
      transition: margin-left 0.3s linear, opacity 0.3s ease,
        visibility 0.3s ease;
    }
  }

  .nly-container-aside-sidebar-scrollbar {
    overflow: auto;
    height: calc(~"100vh - 58px");
  }

  .nly-container-aside-sidebar::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0.5rem; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0.5rem;
  }
  .nly-container-aside-sidebar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #4374b1;
  }

  .nly-container-aside-sidebar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #4e525741;
  }

  .nly-container-aside-sidebar:hover {
    height: calc(100% - 4rem);
    overflow: auto;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;
  }
  .nly-container-aside-sidebar {
    height: calc(100% - 0.7rem);
    overflow: hidden;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;
    .nly-container-aside-sidebar-user-panel {
      position: relative;
      border-bottom: 1px solid #4e5257;
      .nly-container-aside-sidebar-user-panel-image {
        display: inline-block;
        padding-left: 0.8rem;
        .nly-container-aside-sidebar-user-panel-image-img {
          max-height: 2.1rem;
          border-radius: 50%;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23) !important;
        }
      }
      .nly-container-aside-sidebar-user-panel-info {
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        padding: 5px 5px 5px 10px;
        color: rgba(255, 255, 255, 0.8);
        margin-left: -10px;
        opacity: 0;
        visibility: hidden;
        transition: margin-left 0.3s linear, opacity 0.3s ease,
          visibility 0.3s ease;
        .nly-container-aside-sidebar-user-panel-info-block {
          display: block !important;
          color: rgba(255, 255, 255, 0.8);
        }
        .nly-container-aside-sidebar-user-panel-info-block:hover {
          display: block !important;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
    .nly-container-aside-sidebar-menu {
      margin-top: 0.5rem !important;
      .nly-container-aside-sidebar-menu-nav {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        margin-top: 0;
      }

      .nly-container-aside-sidebar-menu-nav-item {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0 0 0 -10px;
          opacity: 0;
          visibility: hidden;
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open.collapsed {
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          .when-opened {
            display: none;
          }
          .when-closed {
            display: block;
          }
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
          .when-closed {
            display: none;
          }
          .when-opened {
            display: block;
          }
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0 0 0 -10px;
          opacity: 0;
          visibility: hidden;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
        .nly-container-aside-sidebar-menu-nav-item-open-icon-right-off {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0 0 0 -10px;
          opacity: 0;
          visibility: hidden;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link.active {
          background-color: rgba(255, 255, 255, 0.9);
          color: #343a40;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon.fas {
          font-size: 1.1rem;
        }
      }
    }
  }
}

// 滑过收起边侧栏
.nly-container-aside-mini:hover {
  height: 100%;
  width: 16rem;
  background-color: #343a40;
  transition: 0.5s;

  .nly-container-aside-brand:hover {
    color: #ffffff;
    text-decoration: none;
  }

  .nly-container-aside-brand {
    display: block;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.8125rem 0.5rem;
    transition: width 0.3s ease-in-out;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #4e5257;
    position: static;

    .nly-container-aside-brand-image {
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 33px;
      width: auto;
      border-radius: 50%;
      background-color: #ffffff00;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) !important;
    }

    .nly-container-aside-brand-text {
      font-weight: 300;
      display: inline-block;
      margin-left: 0;
      opacity: 1;
      visibility: visible;
      transition: margin-left 0.3s linear, opacity 0.3s ease,
        visibility 0.3s ease;
    }
  }

  .nly-container-aside-sidebar-scrollbar {
    overflow: auto;
    height: calc(~"100vh - 58px");
  }

  .nly-container-aside-sidebar::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0.5rem; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0.5rem;
  }
  .nly-container-aside-sidebar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #4374b1;
  }

  .nly-container-aside-sidebar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #4e525741;
  }

  .nly-container-aside-sidebar:hover {
    height: calc(100% - 4rem);
    overflow: auto;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;
  }
  .nly-container-aside-sidebar {
    height: calc(100% - 0.7rem);
    overflow: hidden;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;
    .nly-container-aside-sidebar-user-panel {
      position: relative;
      border-bottom: 1px solid #4e5257;
      .nly-container-aside-sidebar-user-panel-image {
        display: inline-block;
        padding-left: 0.8rem;
        .nly-container-aside-sidebar-user-panel-image-img {
          max-height: 2.1rem;
          border-radius: 50%;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23) !important;
        }
      }
      .nly-container-aside-sidebar-user-panel-info {
        display: inline-block;
        margin-left: 0;
        opacity: 1;
        visibility: visible;
        transition: margin-left 0.3s linear, opacity 0.3s ease,
          visibility 0.3s ease;

        overflow: hidden;
        white-space: nowrap;
        padding: 5px 5px 5px 10px;
        .nly-container-aside-sidebar-user-panel-info-block {
          display: block !important;
          color: rgba(255, 255, 255, 0.8);
        }
        .nly-container-aside-sidebar-user-panel-info-block:hover {
          display: block !important;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
    .nly-container-aside-sidebar-menu {
      margin-top: 0.5rem !important;
      .nly-container-aside-sidebar-menu-nav {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        margin-top: 0;
      }

      .nly-container-aside-sidebar-menu-nav-item {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open.collapsed {
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          .when-opened {
            display: none;
          }
          .when-closed {
            display: block;
          }
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
          .when-closed {
            display: none;
          }
          .when-opened {
            display: block;
          }
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
        .nly-container-aside-sidebar-menu-nav-item-open-icon-right-off {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link.active {
          background-color: rgba(255, 255, 255, 0.9);
          color: #343a40;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon.fas {
          font-size: 1.1rem;
        }
      }
    }
  }
}

// 移动端边侧栏
.nly-container-aside-max-open {
  height: 100%;
  width: 16rem;
  background-color: #343a40;
  transition: 0.5s;

  .nly-container-aside-brand:hover {
    color: #ffffff;
    text-decoration: none;
  }
  .nly-container-aside-brand {
    display: block;
    font-size: 1.25rem;
    line-height: 1.5;
    padding: 0.8125rem 0.5rem;
    transition: width 0.3s ease-in-out;
    white-space: nowrap;
    color: rgba(255, 255, 255, 0.8);
    border-bottom: 1px solid #4e5257;
    position: static;

    .nly-container-aside-brand-image {
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 33px;
      width: auto;
      border-radius: 50%;
      background-color: #ffffff00;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23) !important;
    }

    .nly-container-aside-brand-text {
      font-weight: 300;
      display: inline-block;
      margin-left: 0;
      opacity: 1;
      visibility: visible;
      transition: margin-left 0.3s linear, opacity 0.3s ease,
        visibility 0.3s ease;
    }
  }

  .nly-container-aside-sidebar-scrollbar {
    overflow: auto;
    height: calc(~"100vh - 58px");
  }

  .nly-container-aside-sidebar::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 0.5rem; /*高宽分别对应横竖滚动条的尺寸*/
    height: 0.5rem;
  }
  .nly-container-aside-sidebar::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #4374b1;
  }

  .nly-container-aside-sidebar::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #4e525741;
  }
  .nly-container-aside-sidebar:hover {
    height: calc(100% - 4rem);
    overflow: auto;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;
  }
  .nly-container-aside-sidebar {
    height: calc(100% - 0.7rem);
    overflow: hidden;
    padding-bottom: 0;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0;

    .nly-container-aside-sidebar-user-panel {
      position: relative;
      border-bottom: 1px solid #4e5257;
      .nly-container-aside-sidebar-user-panel-image {
        display: inline-block;
        padding-left: 0.8rem;
        .nly-container-aside-sidebar-user-panel-image-img {
          max-height: 2.1rem;
          border-radius: 50%;
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16),
            0 3px 6px rgba(0, 0, 0, 0.23) !important;
        }
      }
      .nly-container-aside-sidebar-user-panel-info {
        overflow: hidden;
        white-space: nowrap;
        display: inline-block;
        padding: 5px 5px 5px 10px;
        transition: margin-left 0.3s linear, opacity 0.3s ease,
          visibility 0.3s ease;
        .nly-container-aside-sidebar-user-panel-info-block {
          display: block !important;
          color: rgba(255, 255, 255, 0.8);
        }
        .nly-container-aside-sidebar-user-panel-info-block:hover {
          display: block !important;
          color: #ffffff;
          text-decoration: none;
        }
      }
    }
    .nly-container-aside-sidebar-menu {
      margin-top: 0.5rem !important;
      .nly-container-aside-sidebar-menu-nav {
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        padding-left: 0;
        margin-bottom: 0;
        list-style: none;
        margin-top: 0;
      }

      .nly-container-aside-sidebar-menu-nav-item {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open.collapsed {
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          .when-opened {
            display: none;
          }
          .when-closed {
            display: block;
          }
        }
      }

      .nly-container-aside-sidebar-menu-nav-item-open {
        margin-bottom: 0;
        width: 100%;
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
          .when-closed {
            display: none;
          }
          .when-opened {
            display: block;
          }
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-link.active {
          background-color: #007bff;
          color: #ffffff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon.fas {
          font-size: 1.1rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-icon-right {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
        }
        .nly-container-aside-sidebar-menu-nav-item-open-icon-right-off {
          transition: -webkit-transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s;
          transition: transform ease-in-out 0.3s,
            -webkit-transform ease-in-out 0.3s;
          position: absolute;
          right: 1rem;
          top: 0.7rem;
          font-weight: 900;
          -webkit-font-smoothing: antialiased;
          display: inline-block;
          font-style: normal;
          font-variant: normal;
          text-rendering: auto;
          line-height: 1;
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link {
          position: relative;
          display: block;
          padding: 0.5rem 1rem;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: 0.2rem;
          color: #ffffff;
          border-radius: 0.25rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link-p {
          transition: margin-left 0.3s linear, opacity 0.3s ease,
            visibility 0.3s ease;
          display: inline-block;
          margin: 0;
          display: inline-block;
          opacity: 1;
          visibility: visible;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:hover,
        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link:focus {
          text-decoration: none;
          background-color: rgba(255, 255, 255, 0.1);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-link.active {
          background-color: rgba(255, 255, 255, 0.9);
          color: #343a40;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.24);
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon {
          font-size: 1.2rem;
          margin-right: 0.2rem;
          text-align: center;
          width: 1.6rem;
        }

        .nly-container-aside-sidebar-menu-nav-item-open-nav-item-icon.fas {
          font-size: 1.1rem;
        }
      }
    }
  }
}

// 边侧栏头片

.nly-container-center-scrollbar {
  overflow: auto;
  height: calc(~"100vh - 1px");
}

.nly-container-center::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 0.5rem; /*高宽分别对应横竖滚动条的尺寸*/
  height: 0.5rem;
}
.nly-container-center::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #a1a1a1a6;
}

.nly-container-center::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ffffff;
}
.nly-container-center {
  background-color: cornsilk;
  overflow: auto;
  height: 100%;
}

.nly-container-center-content {
  height: 100%;
  width: 100%;
  background-color: wheat;
}

.nly-container-center-content-header {
  height: auto;
  background-color: #6f42c1;
}

.nly-container-center-content-header-icon {
  background-color: transparent;
  color: #ffff;
  display: none;
}
.nly-container-center-content-header-brand {
  position: initial;
  display: none;
  .nly-container-center-content-header-brand-img {
    float: left;
    line-height: 0.8;
    margin-left: 0.8rem;
    margin-right: 0.5rem;
    margin-top: -3px;
    max-height: 33px;
    width: auto;
    border-radius: 50%;
    background-color: #ffffff00;

    .nly-container-center-content-header-brand-text {
      font-weight: 300;
      display: inline-block;
      margin-left: 0;
      opacity: 1;
      visibility: visible;
      transition: margin-left 0.3s linear, opacity 0.3s ease,
        visibility 0.3s ease;
    }
  }
}

.nly-container-center-content-main {
  background-color: #ffff;
  height: calc(~"100vh - 7.125rem");
  min-height: 380px;
}

.nly-container-center-content-main-breadcrumb-left {
  font-size: 1.3rem;
  color: rgb(105, 104, 104);
}

.nly-container-center-content-main-breadcrumb-right {
  display: flex;
}

.nly-container-center-content-main-card {
  margin: 0.5rem;
}

.nly-container-center-content-main-aside-toggle {
  display: block !important;
  border: 0;
  color: #fff !important;
}

.nly-container-center-content-main-aside-open-toggle {
  border: 0;
}

.nly-container-center-content-foot {
  height: 3.5625rem;
  background-color: violet;
}

.nly-container-aside-max-open-overlay {
  background-color: rgba(0, 0, 0, 0.226);
  bottom: 0;
  display: none;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 14;
}

@media (max-width: 576px) {
  .nly-container-aside-max {
    height: 100%;
    width: 16rem;
    background-color: #343a40;
    left: -20rem;
    position: absolute;
    transition: 0.8s;
    z-index: @basezindex + 5;
  }

  .nly-container-aside-max
    > .nly-container-aside-brand
    > .nly-container-aside-brand-text {
    font-size: smaller;
    font-weight: 300;
    display: inline-block;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
  }

  .nly-container-aside-max
    > .nly-container-aside-sidebar
    > .nly-container-aside-sidebar-user-panel
    > .nly-container-aside-sidebar-user-panel-info
    > .nly-container-aside-sidebar-user-panel-info-block {
    font-size: smaller;
    display: block !important;
    color: rgba(255, 255, 255, 0.8);
  }

  .nly-container-aside-max-open {
    height: 100%;
    width: 16rem;
    left: 0rem;
    background-color: #343a40;
    position: absolute;
    z-index: @basezindex + 10;
    transition: 0.8s;
  }

  .nly-container-aside-max-open
    > .nly-container-aside-brand
    > .nly-container-aside-brand-text {
    font-size: smaller;
    font-weight: 300;
    display: inline-block;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
  }

  .nly-container-aside-max-open
    > .nly-container-aside-sidebar
    > .nly-container-aside-sidebar-user-panel
    > .nly-container-aside-sidebar-user-panel-info
    > .nly-container-aside-sidebar-user-panel-info-block {
    font-size: smaller;
    display: block !important;
    color: rgba(255, 255, 255, 0.8);
  }

  .nly-container-center-content-main-aside-toggle {
    display: none !important;
  }
  .nly-container-aside-mini {
    height: 100%;
    width: 4.5rem;
    background-color: #343a40;
    transition: 0.5s;
    left: -10rem;
    position: absolute;
  }

  .nly-container-center-content-header-icon {
    background-color: transparent;
    display: block;
  }
  .nly-container-center-content-header-brand {
    position: initial;
    display: block;
    .nly-container-center-content-header-brand-img {
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 33px;
      width: auto;
      border-radius: 50%;
      background-color: #ffffff00;

      .nly-container-center-content-header-brand-text {
        font-weight: 300;
        display: inline-block;
        margin-left: 0;
        opacity: 1;
        visibility: visible;
        transition: margin-left 0.3s linear, opacity 0.3s ease,
          visibility 0.3s ease;
      }
    }
  }

  .nly-container-aside-max-open-overlay {
    background-color: rgba(0, 0, 0, 0.226);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 14;
  }
}

@media (min-width: 576px) and (max-width: 767px) {
  .nly-container-aside-max {
    height: 100%;
    width: 16rem;
    background-color: #343a40;
    left: -20rem;
    position: absolute;
    transition: 0.8s;
    z-index: @basezindex + 5;
  }

  .nly-container-aside-max
    > .nly-container-aside-brand
    > .nly-container-aside-brand-text {
    font-size: smaller;
    font-weight: 300;
    display: inline-block;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
  }

  .nly-container-aside-max
    > .nly-container-aside-sidebar
    > .nly-container-aside-sidebar-user-panel
    > .nly-container-aside-sidebar-user-panel-info
    > .nly-container-aside-sidebar-user-panel-info-block {
    font-size: smaller;
    display: block !important;
    color: rgba(255, 255, 255, 0.8);
  }

  .nly-container-aside-max-open {
    height: 100%;
    width: 16rem;
    left: 0rem;
    background-color: #343a40;
    position: absolute;
    z-index: @basezindex + 10;
    transition: 0.8s;
  }
  .nly-container-aside-max-open
    > .nly-container-aside-brand
    > .nly-container-aside-brand-text {
    font-size: smaller;
    font-weight: 300;
    display: inline-block;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
  }

  .nly-container-aside-max-open
    > .nly-container-aside-sidebar
    > .nly-container-aside-sidebar-user-panel
    > .nly-container-aside-sidebar-user-panel-info
    > .nly-container-aside-sidebar-user-panel-info-block {
    font-size: smaller;
    display: block !important;
    color: rgba(255, 255, 255, 0.8);
  }

  .nly-container-center-content-main-aside-toggle {
    display: none !important;
  }
  .nly-container-aside-mini {
    height: 100%;
    width: 4.5rem;
    background-color: #343a40;
    transition: 0.5s;
    left: -10rem;
    position: absolute;
  }

  .nly-container-center-content-header-icon {
    background-color: transparent;
    display: block;
  }

  .nly-container-center-content-header-brand {
    position: initial;
    display: block;
    .nly-container-center-content-header-brand-img {
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 33px;
      width: auto;
      border-radius: 50%;
      background-color: #ffffff00;

      .nly-container-center-content-header-brand-text {
        font-weight: 300;
        display: inline-block;
        margin-left: 0;
        opacity: 1;
        visibility: visible;
        transition: margin-left 0.3s linear, opacity 0.3s ease,
          visibility 0.3s ease;
      }
    }
  }

  .nly-container-aside-max-open-overlay {
    background-color: rgba(0, 0, 0, 0.226);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 14;
  }
}

@media (min-width: 768px) and (max-width: 992px) {
  .nly-container-aside-max {
    height: 100%;
    width: 16rem;
    background-color: #343a40;
    left: -20rem;
    position: absolute;
    transition: 0.8s;
    z-index: @basezindex + 5;
  }
  .nly-container-aside-max
    > .nly-container-aside-brand
    > .nly-container-aside-brand-text {
    font-size: smaller;
    font-weight: 300;
    display: inline-block;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
  }

  .nly-container-aside-max
    > .nly-container-aside-sidebar
    > .nly-container-aside-sidebar-user-panel
    > .nly-container-aside-sidebar-user-panel-info
    > .nly-container-aside-sidebar-user-panel-info-block {
    font-size: smaller;
    display: block !important;
    color: rgba(255, 255, 255, 0.8);
  }

  .nly-container-aside-max-open {
    height: 100%;
    width: 16rem;
    left: 0rem;
    background-color: #343a40;
    position: absolute;
    z-index: @basezindex + 10;
    transition: 0.8s;
  }

  .nly-container-aside-max-open
    > .nly-container-aside-brand
    > .nly-container-aside-brand-text {
    font-size: smaller;
    font-weight: 300;
    display: inline-block;
    margin-left: 0;
    opacity: 1;
    visibility: visible;
    transition: margin-left 0.3s linear, opacity 0.3s ease, visibility 0.3s ease;
  }

  .nly-container-aside-max-open
    > .nly-container-aside-sidebar
    > .nly-container-aside-sidebar-user-panel
    > .nly-container-aside-sidebar-user-panel-info
    > .nly-container-aside-sidebar-user-panel-info-block {
    font-size: smaller;
    display: block !important;
    color: rgba(255, 255, 255, 0.8);
  }

  .nly-container-center-content-main-aside-toggle {
    display: none !important;
  }
  .nly-container-aside-mini {
    height: 100%;
    width: 4.5rem;
    background-color: #343a40;
    transition: 0.5s;
    left: -10rem;
    position: absolute;
  }

  .nly-container-center-content-header-icon {
    background-color: transparent;
    display: block;
  }

  .nly-container-center-content-header-brand {
    position: initial;
    display: block;
    .nly-container-center-content-header-brand-img {
      float: left;
      line-height: 0.8;
      margin-left: 0.8rem;
      margin-right: 0.5rem;
      margin-top: -3px;
      max-height: 33px;
      width: auto;
      border-radius: 50%;
      background-color: #ffffff00;

      .nly-container-center-content-header-brand-text {
        font-weight: 300;
        display: inline-block;
        margin-left: 0;
        opacity: 1;
        visibility: visible;
        transition: margin-left 0.3s linear, opacity 0.3s ease,
          visibility 0.3s ease;
      }
    }
  }
  .nly-container-aside-max-open-overlay {
    background-color: rgba(0, 0, 0, 0.226);
    bottom: 0;
    display: block;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 14;
  }
}

@media (min-width: 993px) and (max-width: 1199px) {
}

@media (min-width: 1200px) {
}
</style>
