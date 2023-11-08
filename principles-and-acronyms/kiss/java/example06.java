import java.util.*;

public class example06 {
    private final Map<String, Set<String>> rolePermissions = new HashMap<>();

    public example06() {
        rolePermissions.put("ADMIN", new HashSet<>(Arrays.asList("READ", "WRITE", "DELETE")));
        rolePermissions.put("EDITOR", new HashSet<>(Arrays.asList("READ", "WRITE")));
        rolePermissions.put("VIEWER", new HashSet<>(Collections.singletonList("READ")));
    }

    public void assignPermission(String role, String permission) {
        if (rolePermissions.containsKey(role) && rolePermissions.get(role).contains(permission)) {
            // Logic to assign permission
        } else {
            throw new IllegalArgumentException("Invalid role or permission");
        }
    }
}
