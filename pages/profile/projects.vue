<script lang="ts" setup>
import Profile from "~/components/profile/Profile.vue";
import PageTitle from "~/lib/PageTitle.vue";
</script>

<template>
  <PageTitle name="Projects" title="Dashboard" />
  <div class="container-fluid">
    <Profile title="Projects" />
    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="row">
        <div class="col-lg-12">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="mb-0">My Projects</h5>
            <div class="d-flex align-items-center">
              <a href="javascript:void(0)" class="btn btn-primary btn-sm ms-2">+ New Project</a>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/figma.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">Figma Design</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div class="clearfix">
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar8.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar6.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar4.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar2.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">60%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-purple" style="width: 60%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-purple">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-primary light border-0">In Progress</span>
            </div>
          </NuxtLink>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/github.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">Github Repository</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar1.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar3.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar5.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar7.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">69%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-danger" style="width: 69%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-dabger">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-danger light border-0">Pending</span>
            </div>
          </NuxtLink>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/spotify.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">Music App</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar8.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar6.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar4.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar2.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">75%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-purple" style="width: 75%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-purple">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-success light border-0">Complete</span>
            </div>
          </NuxtLink>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/twitch.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">Banking System</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar1.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar3.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar5.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar7.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">92%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-danger" style="width: 92%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-dabger">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-warning light border-0">Testing</span>
            </div>
          </NuxtLink>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/dropbox.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">Cloud Store</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar8.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar6.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar4.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar2.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">68%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-danger" style="width: 68%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-dabger">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-danger light border-0">Pending</span>
            </div>
          </NuxtLink>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/html.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">HTML Design</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar1.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar3.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar5.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar7.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">68%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-danger" style="width: 68%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-dabger">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-success light border-0">Complete</span>
            </div>
          </NuxtLink>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/amazon.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">eCommerce Theme</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar8.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar6.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar4.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar2.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">86%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-purple" style="width: 86%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-purple">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-warning light border-0">Testing</span>
            </div>
          </NuxtLink>
        </div>
        <div class="col-xl-3 col-sm-6">
          <NuxtLink to="/profile/projects-details" class="card">
            <div class="card-body">
              <div class="clearfix d-flex">
                <div class="avatar avatar-md rounded bg-light d-flex align-items-center justify-content-center me-3">
                  <img src="../../assets/images/logo/slack.png" class="m-0" alt="" />
                </div>
                <div class="clearfix">
                  <h6 class="mb-0 fw-semibold">Music App</h6>
                  <span class="text-muted fs-13">There are many variations</span>
                </div>
              </div>
              <p class="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div>
                <p class="text-secondary mb-1 font-w500">Team</p>
                <div class="avatar-list avatar-list-stacked">
                  <img src="../../assets/images/avatar/avatar1.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar3.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar5.jpg" class="avatar rounded-circle" alt="" />
                  <img src="../../assets/images/avatar/avatar7.jpg" class="avatar rounded-circle" alt="" />
                </div>
              </div>
              <div class="mt-3">
                <div class="d-flex justify-content-between">
                  <span class="fw-medium text-secondary">Project Complete</span>
                  <span class="">65%</span>
                </div>
                <div class="progress mt-2">
                  <div class="progress-bar bg-danger" style="width: 65%; height: 5px; border-radius: 4px" role="progressbar"></div>
                </div>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between flex-wrap">
              <div class="due-progress mb-0">
                <p class="mb-0 text-secondary">Due <span class="text-dabger">: 2023-06-02</span></p>
              </div>
              <span class="badge badge-sm badge-success light border-0">Complete</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
