#4千万美元融资
基于SpringBoot的权限管理
利用shiro权限管理框架实现统一的请求拦截
权限动态管理。

查看课程列表
	@GetMapping("/courselist")
 添加课程
	@PostMapping("/course")

 更新课程
	@PutMapping("/course")

 登录
 @PostMapping("/auth")
	 
  查询当前登录用户的信息
	@GetMapping("/user")
	  
   登出
	@PostMapping("/logout")
  
  查看用户列表 
	@GetMapping("/users")
	
 添加用户
	@PostMapping("/user")
  
  修改用户
	
	@PutMapping("/user")
	
  查看角色信息
	@GetMapping("/roles")
	
	 角色列表
	 
	@GetMapping("/roleList")
	
	 查询所有权限, 给角色分配权限时调用
	 
	@GetMapping("/permissonList")
	
	 新增角色
	
	@PostMapping("/role")
	
	 修改角色
	
	@PutMapping("/role")
	
	删除角色
	 
	@DeleteMapping("/role")
	
