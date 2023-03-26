<template>
  <div class="pages_wraper">
    <div class="section section-hero section-shaped">
      <div class="shape shape-style-1 shape-primary">
        <div class="container title_block ">
          <div class="ct-page-title">
            <h1 class="ct-title" id="content">Buy</h1>
          </div>
        </div>
        <span class="span-150"></span>
        <span class="span-50"></span>
        <span class="span-50"></span>
        <span class="span-75"></span>
        <span class="span-100"></span>
        <span class="span-75"></span>
        <span class="span-50"></span> 
        <span class="span-100"></span>
        <span class="span-50"></span>
        <span class="span-100"></span>
      </div>
      <div class="container buy cont_wrap">
        <h3>This is Buy form</h3>
        <div class="alert alert-default" role="alert">
          This is a warning alert—check it out!
        </div>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_01" class="form-label">Title 01</label>
                <input type="email" class="form-control" id="title_01" placeholder="Title 01">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_02" class="form-label">Title 02</label>
                <input type="text" id="title_02" placeholder="Title 02" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_03" class="form-label">Title 3</label>
                <input type="text" class="form-control" id="title_03" placeholder="titile 3">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_04" class="form-label">Title 04</label>
                <input type="text" id="title_04" placeholder="Title 04" class="form-control" />
              </div>
            </div>
          </div><!--end inputs--><br/><br/>
          <div class="row">
            <div class="col-md-6">
              <div class="custom-control custom-checkbox mb-3">
                <input class="custom-control-input" id="customCheck1" type="checkbox">
                <label class="custom-control-label" for="customCheck1">Unchecked Check Box 01</label>
              </div>
              <div class="custom-control custom-checkbox mb-3">
                <input class="custom-control-input" id="customCheck2" type="checkbox">
                <label class="custom-control-label" for="customCheck2">Unchecked Check Box 02</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="custom-control custom-checkbox mb-3 ">
                <input class="custom-control-input" id="customCheck3" type="checkbox">
                <label class="custom-control-label" for="customCheck3">Unchecked Check Box 03</label>
              </div>
              <div class="custom-control custom-checkbox mb-3">
                <input class="custom-control-input" id="customCheck4" type="checkbox">
                <label class="custom-control-label" for="customCheck4">Unchecked Check Box 04</label>
              </div>
            </div>
          </div><!--end checkbox--><br/><br/>
          <div class="row" style="padding-left: 20px;">
            <div class="col-md-6">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault">
                <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault2" checked>
                <label class="form-check-label" for="flexSwitchCheckDefault2">Default switch checkbox input</label>
              </div>
            </div>
          </div><!--end toggle checkboxs-->
          
<br/><br/><br/><br/>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_01" class="form-label">Title 05</label>
                <input type="email" class="form-control" id="title_01" placeholder="Title 01">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_02" class="form-label">Title 06</label>
                <input type="text" id="title_02" placeholder="Title 02" class="form-control" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_03" class="form-label">Title 07</label>
                <input type="text" class="form-control" id="title_03" placeholder="titile 3">
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="title_04" class="form-label">Title 08</label>
                <input type="text" id="title_04" placeholder="Title 04" class="form-control" />
              </div>
            </div>
          </div><!--end inputs--><br/><br/><br/><br/>
          <div class="row" >
            <div>
              <label for="exampleFormControlTextarea1" class="form-label">Example textarea 01</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a large text here ..."></textarea>
            </div>
            <hr/>
            <div>
              <label for="exampleFormControlTextarea02" class="form-label">Example textarea 02</label>
              <textarea class="form-control" id="exampleFormControlTextarea02" rows="3" placeholder="Write a large text here ..."></textarea>
            </div>
          </div><!--end textarea-->
         <hr/> 
          <div class="d-grid gap-2 col-6 mx-auto">
          <button type="button" class="btn btn-primary">Sent it!</button>
          </div>
          <br/>
        </form>
      </div>
    </div>


  </div>
</template>
<style scoped>
.ct-title {
  font-size: 1.5rem;
  font-weight: 600;
}

.ct-page-title {
  padding-left: 1.25rem;
  border-left: 2px solid #5e72e4;
  margin-bottom: 1.5rem;
}

.section-shaped .shape-style-1.shape-primary {
  background: linear-gradient(150deg, #146483 15%, #6eccd5 70%, #225683 94%);
}

.section-shaped {
  margin-top: 0px;
}

.cont_wrap {
  background: #fff;
  padding: 10px !important;
  height: 100%;
}

.title_block {
  background: #fff;
}
</style>