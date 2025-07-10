<script lang="ts" setup>
import OverviewRightContent from "~/components/profile/OverviewRightContent.vue";
import Profile from "~/components/profile/Profile.vue";
import PageTitle from "~/lib/PageTitle.vue";
import LightGallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import img from "~/assets/images/post/img-full1.jpg";
import img2 from "~/assets/images/post/img2.jpg";
import img3 from "~/assets/images/post/img1.jpg";
import img4 from "~/assets/images/post/img3.jpg";
import img5 from "~/assets/images/post/img-full2.jpg";
import img6 from "~/assets/images/post/img4.jpg";
import img7 from "~/assets/images/post/img5.jpg";
import img8 from "~/assets/images/post/img6.jpg";

const gallery1 = [
  { className: "grid-item colspan-3 rowspan-2", img: img },
  { className: "grid-item", img: img2 },
  { className: "grid-item", img: img3 },
  { className: "grid-item gallery-more", img: img4 },
];

const gallery2 = [
  { className: "grid-item colspan-2 rowspan-3", img: img5 },
  { className: "grid-item", img: img6 },
  { className: "grid-item", img: img7 },
  { className: "grid-item gallery-more", img: img8 },
];
</script>

<template>
  <PageTitle name="Overview" title="Dashboard" />
  <div class="container-fluid">
    <Profile title="Overview" />

    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="row">
        <div class="col-xl-6">
          <div class="row">
            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar1.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Jackson</h6>
                        <span class="fs-13">Yestarday at 4:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar2.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>

                  <LightGallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }" class="gallery-grid rows-3" id="lightgallery">
                    <a v-for="({ img, className }, ind) in gallery1" :href="img" :class="className" :key="ind" :data-more="ind == 3 ? '+6' : ''">
                      <img :src="img" alt="" />
                    </a>
                  </LightGallery>

                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar3.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <LightGallery :settings="{ speed: 500, plugins: [lgThumbnail, lgZoom] }" class="gallery-grid rows-3" id="lightgallery2">
                    <a :href="img" :class="className" v-for="({ className, img }, index) in gallery2" :key="index">
                      <img :src="img" alt="" />
                    </a>
                  </LightGallery>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar4.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="post-quote bg-purple p-4 text-center mb-2 rounded">
                    <h3 class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar5.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="post-quote post-quote-img bg-purple p-4 text-center mb-2 rounded" style="background-image: url('images/post/img8.jpg')">
                    <div class="quote-inner">
                      <h3 class="text-white">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                      </h3>
                    </div>
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar6.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="clearfix mb-2">
                    <img src="../../assets/images/post/img7.jpg" alt="" class="rounded w-100" />
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar7.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="clearfix mb-2">
                    <iframe
                      class="rounded w-100"
                      width="100%"
                      height="166"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/539018871&amp;color=%23ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
                    ></iframe>
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar8.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="clearfix mb-2 text-center">
                    <img src="../../assets/images/post/img6.jpg" alt="" class="rounded" />
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-video">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar1.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Kennedy</h6>
                        <span class="fs-13">Yestarday at 5:30 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="clearfix mb-2">
                    <iframe
                      class="rounded w-100"
                      src="https://www.youtube.com/embed/pyRjzvdOSHk"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="clearfix mb-3">
                    <div class="d-flex justify-content-between mb-2">
                      <div class="d-flex align-items-center py-2">
                        <div class="d-inline-block position-relative">
                          <img src="../../assets/images/avatar/avatar2.jpg" alt="" class="rounded avatar avatar-md" />
                        </div>
                        <div class="clearfix ms-2">
                          <h6 class="fs-14 mb-0 fw-semibold">Brad Dennis</h6>
                          <span class="fs-13">Yestarday at 5:06 PM</span>
                        </div>
                      </div>
                      <div class="clearfix ms-auto">
                        <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                      </div>
                    </div>
                    <div class="clearfix text-secondary">
                      <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                    </div>
                    <div class="clearfix pt-1">
                      <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 25 </a>
                      <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                    </div>
                  </div>
                  <div class="d-flex py-2 position-relative">
                    <div class="d-inline-block position-relative">
                      <img src="../../assets/images/avatar/5.jpg" alt="" class="rounded avatar avatar-md" />
                    </div>
                    <div class="clearfix ms-2">
                      <h6 class="fs-13 mb-1 fw-semibold">Mr. Hamilton <span class="fs-12 text-muted ms-1 fw-normal">2 Day ago</span></h6>
                      <p class="fs-12 mb-0 text-secondary">There are many variations of passages of Lorem Ipsum available.</p>
                    </div>
                    <a href="javascript:void(0);" class="position-absolute end-0 top-0">Reply</a>
                  </div>
                  <div class="d-flex py-2 position-relative">
                    <div class="d-inline-block position-relative">
                      <img src="../../assets/images/avatar/5.jpg" alt="" class="rounded avatar avatar-md" />
                    </div>
                    <div class="clearfix ms-2">
                      <h6 class="fs-13 mb-1 fw-semibold">Mrs. Anderson <span class="fs-12 text-muted ms-1 fw-normal">3 Days ago</span></h6>
                      <p class="fs-12 mb-0 text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                    </div>
                    <a href="javascript:void(0);" class="position-absolute end-0 top-0">Reply</a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <div class="card card-comment">
                <div class="card-body pb-0">
                  <div class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center py-2">
                      <div class="d-inline-block position-relative">
                        <img src="../../assets/images/avatar/avatar3.jpg" alt="" class="rounded avatar avatar-md" />
                      </div>
                      <div class="clearfix ms-2">
                        <h6 class="fs-14 mb-0 fw-semibold">Lewis</h6>
                        <span class="fs-13">Yestarday at 5:42 PM</span>
                      </div>
                    </div>
                    <div class="clearfix ms-auto">
                      <button type="button" class="btn btn-light btn-icon-xxs tp-btn fs-18 align-self-start"><i class="bi bi-grid"></i></button>
                    </div>
                  </div>
                  <div class="clearfix text-secondary">
                    <p class="fs-14 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div class="clearfix pt-1">
                    <a href="javascript:void(0);" class="me-3"> <i class="fa-regular fa-image"></i> 24 </a>
                    <a href="javascript:void(0);" class="post-like"> <i class="fa-regular fa-heart"></i> 75 </a>
                  </div>
                  <div class="position-relative border-top border-secondary border-opacity-10 d-flex align-items-center mt-3">
                    <input type="text" class="form-control p-0 rounded-0 border-0 pe-2 bg-transparent" placeholder="Reply.." />
                    <div class="d-flex">
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14.2934 7.36665L8.1667 13.4933C7.41613 14.2439 6.39815 14.6655 5.3367 14.6655C4.27524 14.6655 3.25726 14.2439 2.5067 13.4933C1.75613 12.7428 1.33447 11.7248 1.33447 10.6633C1.33447 9.60186 1.75613 8.58388 2.5067 7.83332L8.63336 1.70665C9.13374 1.20628 9.81239 0.925171 10.52 0.925171C11.2277 0.925171 11.9063 1.20628 12.4067 1.70665C12.9071 2.20703 13.1882 2.88568 13.1882 3.59332C13.1882 4.30096 12.9071 4.97961 12.4067 5.47999L6.27336 11.6067C6.02318 11.8568 5.68385 11.9974 5.33003 11.9974C4.97621 11.9974 4.63688 11.8568 4.3867 11.6067C4.13651 11.3565 3.99596 11.0171 3.99596 10.6633C3.99596 10.3095 4.13651 9.97017 4.3867 9.71999L10.0467 4.06665"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                      <a href="javascript:void(0);" class="p-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M14 6.66669C14 11.3334 8 15.3334 8 15.3334C8 15.3334 2 11.3334 2 6.66669C2 5.07539 2.63214 3.54927 3.75736 2.42405C4.88258 1.29883 6.4087 0.666687 8 0.666687C9.5913 0.666687 11.1174 1.29883 12.2426 2.42405C13.3679 3.54927 14 5.07539 14 6.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M8 8.66669C9.10457 8.66669 10 7.77126 10 6.66669C10 5.56212 9.10457 4.66669 8 4.66669C6.89543 4.66669 6 5.56212 6 6.66669C6 7.77126 6.89543 8.66669 8 8.66669Z"
                            stroke="#888888"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-12">
              <button type="button" class="btn btn-primary w-100 mb-4">More Feeds</button>
            </div>
          </div>
        </div>
        <OverviewRightContent />
      </div>
    </div>
  </div>
</template>
