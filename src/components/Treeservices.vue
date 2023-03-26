<template>
    <div>
        <section class="section section-lg pt-lg-0 mt--200">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <div class="card border-0 card-lift--hover shadow"><!---->
                                    <div class="card-body py-5">
                                        <div class="icon icon-shape mb-4 icon-shape-primary rounded-circle"><i
                                                class="ni ni-check-bold"></i></div>
                                        <h6 class="text-primary text-uppercase">Download Argon</h6>
                                        <p class="description mt-3">Argon is a great free UI package based on Bootstrap 4
                                            that includes the most important components and features.</p>
                                        <div><span class="badge badge-primary badge-pill">design</span><span
                                                class="badge badge-primary badge-pill">system</span><span
                                                class="badge badge-primary badge-pill">creative</span></div><a type=""
                                            class="btn mt-4 btn-primary" href="#"><!----><!----><!---->
                                            Learn more
                                        </a>
                                    </div><!----><!---->
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card border-0 card-lift--hover shadow"><!---->
                                    <div class="card-body py-5">
                                        <div class="icon icon-shape mb-4 icon-shape-success rounded-circle"><i class="ni ni-single-copy-04"></i></div>
                                        <h6 class="text-success text-uppercase">Build Something</h6>
                                        <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                            4 that includes the most important components and features.</p>
                                        <div><span class="badge badge-success badge-pill">business</span><span
                                                class="badge badge-success badge-pill">vision</span><span
                                                class="badge badge-success badge-pill">success</span></div><a type=""
                                            class="btn mt-4 btn-success" href="#"><!----><!----><!---->
                                            Learn more
                                        </a>
                                    </div><!----><!---->
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card border-0 card-lift--hover shadow"><!---->
                                    <div class="card-body py-5">
                                        <div class="icon icon-shape mb-4 icon-shape-warning rounded-circle"><i class="ni ni-paper-diploma"></i></div>
                                        <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                                        <p class="description mt-3">Argon is a great free UI package based on Bootstrap
                                            4 that includes the most important components and features.</p>
                                        <div><span class="badge badge-warning badge-pill">marketing</span><span
                                                class="badge badge-warning badge-pill">product</span><span
                                                class="badge badge-warning badge-pill">launch</span></div><a type=""
                                            class="btn mt-4 btn-warning" href="#"><!----><!----><!---->
                                            Learn more
                                        </a>
                                    </div><!----><!---->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<style scoped>
.card.border-0.card-lift--hover.shadow{
    overflow: hidden;
}
.card.border-0.card-lift--hover.shadow::before{
    content: ' ';
    background-image: url(../assets/pattern-1.svg);
    width: 85px;
    height: 85px;
    top: -14px;
    right: -17px;
    position: absolute;
    background-color: var(--gray-dark);
    border-radius: 50%;
}
</style>