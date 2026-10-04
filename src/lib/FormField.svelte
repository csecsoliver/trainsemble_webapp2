<script lang="ts">
    let {id, type, label, placeholder, value, name, submit} = $props()
    
</script>

<label for="{id}">
    {label}
    <input type="{type}" id="{id}" name="{name}" placeholder="{placeholder}" bind:value={value}>
    <button onclick={()=>{
        submit()
    }}>Save</button>
</label>