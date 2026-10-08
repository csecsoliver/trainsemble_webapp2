<script lang="ts">
	import { loginForm } from "./login.remote";

    
</script>
<form {...loginForm}>
    <div>
        <label>
            Login name: <br>
            <input {...loginForm.fields.loginName.as("text")}>
        </label>
    </div>
    <div>
        <label>
            Password: <br>
            <input {...loginForm.fields.password.as("password")}>
        </label>
    </div>
    <button type="submit">Login</button>
</form>