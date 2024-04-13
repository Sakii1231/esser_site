<script>
    import { PUBLIC_PROD } from '$env/static/public';

    console.log(PUBLIC_PROD)
    const isTrue = true;

    if (eval(PUBLIC_PROD)) {
        console.log("The value is true.");
    } else {
        console.log("The value is false.");
    }


</script>



