<template>
<div>
<p>{{$route.params.title}}</p>
<h5>{{title}}</h5>
</div>
</template>
<script>
export default {
    props:["title"]
}
</script>