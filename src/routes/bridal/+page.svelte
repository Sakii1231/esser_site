<script>
    import ImageGridGridcol from "$lib/components/ImageGrid.svelte";
    export let data
</script>

<div>
    <ImageGridGridcol myFilesList={data.fileArray} imgFolder={data.imgFolder} />
</div>