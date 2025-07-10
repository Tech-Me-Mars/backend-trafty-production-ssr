<template>
  <CommonNavbar page="CMS" path="Email Template" />
  <div class="container-fluid">
    <div class="row">
      <div class="col-xl-12">
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa"><i class="fa-solid fa-filter me-1"></i>Filter</div>
            <div class="tools">
              <a href="#emailCollape" class="expand SlideToolHeader" data-bs-toggle="collapse" data-bs-target="#emailCollape" aria-expanded="true" aria-controls="emailCollape"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
          <div class="cm-content-body form excerpt collape show" id="emailCollape">
            <div class="card-body">
              <div class="row">
                <div class="col-xl-3 col-sm-6">
                  <div class="mb-3">
                    <input type="text" class="form-control" placeholder="Title" />
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 mb-3 mb-sm-0">
                  <EmailCustomSelect valueOne="Select Status" valueTwo="Active" valueThree="Inactive" />
                </div>
                <div class="col-xl-3 col-sm-6 mb-3 mb-sm-0">
                  <input type="text" class="form-control" placeholder="Title" />
                </div>
                <div class="col-xl-3 col-sm-6">
                  <a href="javascript:void(0);" class="btn btn-primary">Filter</a>{{ " " }}
                  <a href="javascript:void(0);" class="btn btn-danger light">Remove Filter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <ul class="d-flex align-items-center">
            <li>
              <NuxtLink to="/add-email" class="btn btn-primary">New Email Template</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="filter cm-content-box box-primary">
          <div class="content-title">
            <div class="cpa"><i class="fa-solid fa-envelope me-1"></i> Email Template List</div>
            <div class="tools">
              <a
                href="javascript:void(0);"
                class="expand SlideToolHeader"
                data-bs-toggle="collapse"
                data-bs-target="#contentCollapseExample2"
                aria-expanded="true"
                aria-controls="contentCollapseExample2"
                ><i class="fal fa-angle-down"></i
              ></a>
            </div>
          </div>
          <div id="contentCollapseExample2" class="cm-content-body form excerpt collapse show">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-bordered table-striped table-condensed flip-content">
                  <thead>
                    <tr>
                      <th class="text-black">Sr.No</th>
                      <th class="text-black">Title</th>
                      <th class="text-black">Status</th>
                      <th class="text-black">Modified</th>
                      <th class="text-end text-black">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>User Registration</td>

                      <td>
                        <a class="btn btn-primary btn-sm content-icon status m-0"><i class="fa-solid fa-check"></i> </a>
                      </td>
                      <td>03 Feb, 2024</td>
                      <td class="text-end">
                        <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon me-0">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>User Forgot Password</td>
                      <td>
                        <a href="javascript:void(0);" class="btn btn-primary btn-sm content-icon m-0"><i class="fa-solid fa-check"></i></a>
                      </td>
                      <td>04 Feb, 2024</td>
                      <td class="text-end">
                        <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon me-0">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>User Activation</td>
                      <td>
                        <a href="javascript:void(0);" class="btn btn-primary btn-sm content-icon m-0"><i class="fa-solid fa-check"></i></a>
                      </td>
                      <td>05 Feb, 2024</td>
                      <td class="text-end">
                        <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon me-0">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>User Login</td>
                      <td>
                        <a href="javascript:void(0);" class="btn btn-primary btn-sm content-icon m-0"><i class="fa-solid fa-check"></i></a>
                      </td>
                      <td>06 Feb, 2024</td>
                      <td class="text-end">
                        <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon me-0">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>User Account Locked</td>
                      <td>
                        <a href="javascript:void(0);" class="btn btn-primary btn-sm content-icon m-0"><i class="fa-solid fa-check"></i></a>
                      </td>
                      <td>07 Feb, 2024</td>
                      <td class="text-end">
                        <a href="javascript:void(0);" class="btn btn-warning btn-sm content-icon">
                          <i class="fa-solid fa-pen-to-square"></i>
                        </a>
                        <a href="javascript:void(0);" class="btn btn-danger btn-sm content-icon me-0">
                          <i class="fa-solid fa-trash"></i>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="d-flex align-items-center justify-content-sm-between justify-content-center flex-wrap">
                  <span>Page 1 of 4, showing 2 records out of 8 total, starting on record 1, ending on 2</span>
                  <nav aria-label="Page navigation example">
                    <ul class="pagination my-2 my-md-0">
                      <li class="page-item">
                        <a class="page-link" href="javascript:void(0);"><i class="fa-solid fa-angle-left"></i></a>
                      </li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0);">1</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0);">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:void(0);"><i class="fa-solid fa-angle-right"></i></a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CmsTable from "@/elements/CmsTable.vue";
import EmailCustomSelect from "@/components/EmailCustomSelect.vue";
import CommonNavbar from "@/lib/CommonNavbar.vue";

export default defineComponent({
  name: "email_template",
  setup() {
    return {};
  },
  components: { CmsTable, EmailCustomSelect, CommonNavbar },
});
</script>

<style scoped></style>
