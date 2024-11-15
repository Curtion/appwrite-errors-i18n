export default [
  {
    name: 'general_unknown',
    description: '发生了未知错误。请检查日志以获得更多信息。',
    code: 500,
  },
  {
    name: 'general_mock',
    description: '由用于测试的模拟控制器抛出的通用错误。',
    code: 400,
  },
  {
    name: 'general_access_forbidden',
    description: '访问此 API 被禁止。',
    code: 401,
  },
  {
    name: 'general_unknown_origin',
    description: '请求来自未知来源。如果您信任该域名，请在 Appwrite 控制台中将其列为受信任的平台。',
    code: 403,
  },
  {
    name: 'general_api_disabled',
    description: '请求的 API 被禁用。您可以在 Appwrite 控制台启用该 API。',
    code: 403,
  },
  {
    name: 'general_service_disabled',
    description: '请求的服务被禁用。您可以在 Appwrite 控制台启用该服务。',
    code: 403,
  },
  {
    name: 'general_unauthorized_scope',
    description: '当前用户或 API 密钥没有访问所请求资源所需的权限范围。',
    code: 401,
  },
  {
    name: 'general_rate_limit_exceeded',
    description: '当前端点的速率限制已超出。请稍后尝试。',
    code: 429,
  },
  {
    name: 'general_smtp_disabled',
    description: '您的 Appwrite 实例中 SMTP 被禁用。您可以在我们的文档中<a href="/docs/email-delivery">了解有关设置 SMTP 的更多信息</a>。',
    code: 503,
  },
  {
    name: 'general_phone_disabled',
    description: '未配置电话提供者。请检查您 Appwrite 服务器的 _APP_SMS_PROVIDER 环境变量。',
    code: 503,
  },
  {
    name: 'general_argument_invalid',
    description: '请求包含一个或多个无效参数。请参考端点文档。',
    code: 400,
  },
  {
    name: 'general_query_limit_exceeded',
    description: '当前属性的查询限制已超出。禁止在单个属性上使用超过 100 个查询值。',
    code: 400,
  },
  {
    name: 'general_query_invalid',
    description: '查询的语法无效。请检查查询并重试。',
    code: 400,
  },
  {
    name: 'general_route_not_found',
    description: '请求的路由未找到。请参考 API 文档并重试。',
    code: 404,
  },
  {
    name: 'general_cursor_not_found',
    description: '游标无效。如果游标表示的项目已被删除，则可能会发生此情况。',
    code: 400,
  },
  {
    name: 'general_server_error',
    description: '发生内部服务器错误。',
    code: 500,
  },
  {
    name: 'general_protocol_unsupported',
    description: '当前协议无法满足请求。请检查 _APP_OPTIONS_FORCE_HTTPS 环境变量的值。',
    code: 426,
  },
  {
    name: 'general_codes_disabled',
    description: '邀请代码在该服务器上被禁用。请联系服务器管理员。',
    code: 500,
  },
  {
    name: 'general_usage_disabled',
    description: '未配置使用统计信息。请检查您 Appwrite 服务器的 _APP_USAGE_STATS 环境变量。',
    code: 501,
  },
  {
    name: 'general_not_implemented',
    description: '此方法尚未完全实现。如果您相信这是一个错误，请升级您的 Appwrite 服务器版本。',
    code: 405,
  },
  {
    name: 'general_invalid_email',
    description: '值必须是有效的电子邮件地址。',
    code: 400,
  },
  {
    name: 'general_invalid_phone',
    description: '值必须是有效的电话号码。请用前缀 \'+\' 和国家代码格式化该号码，例如 +16175551212。',
    code: 400,
  },
  {
    name: 'general_region_access_denied',
    description: '由于法律要求，您的位置不被支持。',
    code: 451,
  },
  {
    name: 'general_bad_request',
    description: '处理您的请求时发生错误。请检查输入并重试。',
    code: 400,
  },
  {
    name: 'user_count_exceeded',
    description: '当前项目用户数量已超过最大限制。请在 Appwrite 控制台中检查您的用户限制。',
    code: 400,
  },
  {
    name: 'user_console_count_exceeded',
    description: '控制台的注册受到限制。您可以联系管理员通过将 _APP_CONSOLE_WHITELIST_ROOT 设置为 "disabled" 来更新控制台注册限制。',
    code: 501,
  },
  {
    name: 'user_jwt_invalid',
    description: 'JWT 令牌无效。请检查 X-Appwrite-JWT 头的值以确保使用了正确的令牌。',
    code: 401,
  },
  {
    name: 'user_already_exists',
    description: '项目中已存在相同 ID、电子邮件或电话的用户。',
    code: 409,
  },
  {
    name: 'user_blocked',
    description: '当前用户已被阻止。您可以通过请求用户 API 的“更新用户状态”端点或在 Appwrite 控制台的身份验证部分取消该用户的阻止。',
    code: 401,
  },
  {
    name: 'user_invalid_token',
    description: '请求中传递的令牌无效。',
    code: 401,
  },
  {
    name: 'user_password_reset_required',
    description: '当前用户需要重置密码。',
    code: 412,
  },
  {
    name: 'user_email_not_whitelisted',
    description: '控制台注册仅限特定电子邮件。请联系您的管理员以获取更多信息。',
    code: 401,
  },
  {
    name: 'user_invalid_code',
    description: '指定的代码无效。请联系您的管理员以获取更多信息。',
    code: 401,
  },
  {
    name: 'user_ip_not_whitelisted',
    description: '控制台注册仅限特定 IP。请联系您的管理员以获取更多信息。',
    code: 401,
  },
  {
    name: 'user_invalid_credentials',
    description: '凭据无效。请检查电子邮件和密码。',
    code: 401,
  },
  {
    name: 'user_anonymous_console_prohibited',
    description: '不允许为控制台项目创建匿名用户。',
    code: 401,
  },
  {
    name: 'user_session_already_exists',
    description: '当会话处于活动状态时，禁止创建新的会话。',
    code: 401,
  },
  {
    name: 'user_not_found',
    description: '未找到请求的 ID 的用户。',
    code: 404,
  },
  {
    name: 'user_email_already_exists',
    description: '项目中已存在相同电子邮件的用户。',
    code: 409,
  },
  {
    name: 'user_password_mismatch',
    description: '密码不匹配。请检查密码和确认密码。',
    code: 400,
  },
  {
    name: 'user_password_recently_used',
    description: '您尝试使用的密码与您之前的密码相似。为了安全起见，请选择其他密码并重试。',
    code: 400,
  },
  {
    name: 'user_password_personal_data',
    description: '您尝试使用的密码包含对您的姓名、电子邮件、电话或用户 ID 的引用。为了安全起见，请选择其他密码并重试。',
    code: 400,
  },
  {
    name: 'user_session_not_found',
    description: '当前用户会话未找到。',
    code: 404,
  },
  {
    name: 'user_identity_not_found',
    description: '未找到身份。请先用 OAuth 提供者登录以创建身份。',
    code: 404,
  },
  {
    name: 'user_unauthorized',
    description: '当前用户无权执行请求的操作。',
    code: 401,
  },
  {
    name: 'user_auth_method_unsupported',
    description: '请求的身份验证方法已被禁用或不受支持。请检查 Appwrite 控制台中的支持身份验证方法。',
    code: 501,
  },
  {
    name: 'user_phone_already_exists',
    description: '项目中已存在相同电话号码的用户。',
    code: 409,
  },
  {
    name: 'user_recovery_codes_already_exists',
    description: '当前用户已生成恢复代码，并且出于安全原因仅可读取一次。',
    code: 409,
  },
  {
    name: 'user_authenticator_not_found',
    description: '找不到当前用户的身份验证器。',
    code: 404,
  },
  {
    name: 'user_recovery_codes_not_found',
    description: '找不到当前用户的恢复代码。',
    code: 404,
  },
  {
    name: 'user_authenticator_already_verified',
    description: '该身份验证器已在当前用户上验证。',
    code: 409,
  },
  {
    name: 'user_phone_not_found',
    description: '当前用户的账户未关联电话。',
    code: 400,
  },
  {
    name: 'user_missing_id',
    description: '缺少来自 OAuth2 提供者的 ID。',
    code: 400,
  },
  {
    name: 'user_more_factors_required',
    description: '需要更多身份验证因素以完成登录过程。',
    code: 401,
  },
  {
    name: 'user_challenge_required',
    description: '需要最近成功的挑战以完成此操作。挑战在 5 分钟内被视为最近。',
    code: 401,
  },
  {
    name: 'user_oauth2_bad_request',
    description: 'OAuth2 提供者拒绝了错误的请求。',
    code: 400,
  },
  {
    name: 'user_oauth2_unauthorized',
    description: 'OAuth2 提供者拒绝了未经授权的请求。',
    code: 401,
  },
  {
    name: 'user_oauth2_provider_error',
    description: 'OAuth2 提供者返回了一些错误。',
    code: 424,
  },
  {
    name: 'user_email_already_verified',
    description: '用户电子邮件已被验证。',
    code: 409,
  },
  {
    name: 'user_phone_already_verified',
    description: '用户电话已被验证。',
    code: 409,
  },
  {
    name: 'user_deletion_prohibited',
    description: '不允许删除具有活动会员资格的用户。请先删除所有确认的会员资格，然后再删除帐户。',
    code: 400,
  },
  {
    name: 'user_target_not_found',
    description: '未找到目标。',
    code: 404,
  },
  {
    name: 'user_target_already_exists',
    description: '具有相同 ID 的目标已存在。',
    code: 409,
  },
  {
    name: 'user_api_key_and_session_set',
    description: '请求中同时使用 API 密钥和会话。请使用 `setSession` 或 `setKey` 之一。了解有关在 SSR 文档中使用的身份验证方法：https://appwrite.io/docs/products/auth/server-side-rendering',
    code: 403,
  },
  {
    name: 'api_key_expired',
    description: '动态 API 密钥已过期。请不要在执行期间使用动态 API 密钥。',
    code: 401,
  },
  {
    name: 'team_not_found',
    description: '未找到请求 ID 的团队。',
    code: 404,
  },
  {
    name: 'team_invite_already_exists',
    description: '用户已被邀请或已是该团队的成员。',
    code: 409,
  },
  {
    name: 'team_invite_not_found',
    description: '未找到请求的团队邀请。',
    code: 404,
  },
  {
    name: 'team_invalid_secret',
    description: '团队邀请密钥无效。请请求一个新的邀请并重试。',
    code: 401,
  },
  {
    name: 'team_membership_mismatch',
    description: '会员 ID 不属于该团队 ID。',
    code: 404,
  },
  {
    name: 'team_invite_mismatch',
    description: '邀请不属于当前用户。',
    code: 401,
  },
  {
    name: 'team_already_exists',
    description: '请求的团队 ID 已存在。请重新选择不同的 ID 并重试。',
    code: 409,
  },
  {
    name: 'membership_not_found',
    description: '未找到请求 ID 的会员资格。',
    code: 404,
  },
  {
    name: 'membership_already_confirmed',
    description: '会员资格已确认。',
    code: 409,
  },
  {
    name: 'avatar_set_not_found',
    description: '未找到请求的头像集。',
    code: 404,
  },
  {
    name: 'avatar_not_found',
    description: '请求的头像未找到。',
    code: 404,
  },
  {
    name: 'avatar_image_not_found',
    description: '在 URL 下未找到请求的图像。',
    code: 404,
  },
  {
    name: 'avatar_remote_url_failed',
    description: '未能从请求的 URL 获取 favicon。',
    code: 404,
  },
  {
    name: 'avatar_icon_not_found',
    description: '未找到请求的 favicon。',
    code: 404,
  },
  {
    name: 'storage_file_already_exists',
    description: '请求 ID 的存储文件已存在。',
    code: 409,
  },
  {
    name: 'storage_file_not_found',
    description: '未找到请求的文件。',
    code: 404,
  },
  {
    name: 'storage_device_not_found',
    description: '未找到请求的存储设备。',
    code: 400,
  },
  {
    name: 'storage_file_empty',
    description: '传递给端点的文件为空。',
    code: 400,
  },
  {
    name: 'storage_file_type_unsupported',
    description: '给定的文件扩展名不受支持。',
    code: 400,
  },
  {
    name: 'storage_invalid_file_size',
    description: '文件大小无效或超出允许的最大大小。请检查文件或 _APP_STORAGE_LIMIT 环境变量的值。',
    code: 400,
  },
  {
    name: 'storage_invalid_file',
    description: '上传的文件无效。请检查文件并重试。',
    code: 403,
  },
  {
    name: 'storage_bucket_already_exists',
    description: '请求 ID 的存储桶已存在。请尝试使用不同的 ID 或使用 ID.unique() 生成唯一 ID。',
    code: 409,
  },
  {
    name: 'storage_bucket_not_found',
    description: '未找到请求 ID 的存储桶。',
    code: 404,
  },
  {
    name: 'storage_invalid_content_range',
    description: '内容范围无效。请检查 Content-Range 头的值。',
    code: 400,
  },
  {
    name: 'storage_invalid_range',
    description: '请求的范围不满足要求。请检查 Range 头的值。',
    code: 416,
  },
  {
    name: 'storage_invalid_appwrite_id',
    description: 'x-appwrite-id 头的值无效。请检查 x-appwrite-id 头的值是否为有效 ID，而不是 unique()。',
    code: 400,
  },
  {
    name: 'storage_file_not_public',
    description: '请求的文件不可公开读取。',
    code: 403,
  },
  {
    name: 'installation_not_found',
    description: '未找到请求 ID 的安装。请检查该 ID 是否正确，或创建安装。',
    code: 404,
  },
  {
    name: 'provider_repository_not_found',
    description: '未找到请求 ID 的 VCS（版本控制系统）存储库。请检查该 ID 是否正确，以及它是否属于您提供的 installationId。',
    code: 404,
  },
  {
    name: 'repository_not_found',
    description: '未找到请求 ID 的存储库。请检查该 ID 是否正确，或创建存储库。',
    code: 404,
  },
  {
    name: 'provider_contribution_conflict',
    description: '外部贡献已被授权。',
    code: 409,
  },
  {
    name: 'general_provider_failure',
    description: 'VCS（版本控制系统）提供者未能处理请求。我们认为这是 VCS 提供者的错误。请重试，或联系支持以获取更多信息。',
    code: 400,
  },
  {
    name: 'function_not_found',
    description: '未找到请求 ID 的函数。',
    code: 404,
  },
  {
    name: 'function_runtime_unsupported',
    description: '请求的运行时已被禁用或不受支持。请检查 _APP_FUNCTIONS_RUNTIMES 环境变量的值。',
    code: 404,
  },
  {
    name: 'function_runtime_unsupported',
    description: '您的 Appwrite 函数的入口点缺失。请在部署时指定它，或在您函数的“设置” > “配置” > “入口点”中更新它。',
    code: 404,
  },
  {
    name: 'function_synchronous_timeout',
    description: '同步函数执行超时。请改用异步执行，或确保执行时间不超过 30 秒。',
    code: 408,
  },
  {
    name: 'function_template_not_found',
    description: '未找到请求 ID 的函数模板。',
    code: 404,
  },
  {
    name: 'build_not_found',
    description: '未找到请求 ID 的构建。',
    code: 404,
  },
  {
    name: 'build_not_ready',
    description: '请求 ID 的构建正在构建中，尚未准备好执行。',
    code: 400,
  },
  {
    name: 'build_in_progress',
    description: '请求 ID 的构建正在进行中。请稍后再试。',
    code: 400,
  },
  {
    name: 'build_already_completed',
    description: '请求 ID 的构建已完成，无法取消。',
    code: 400,
  },
  {
    name: 'deployment_not_found',
    description: '未找到请求 ID 的部署。',
    code: 404,
  },
  {
    name: 'execution_not_found',
    description: '未找到请求 ID 的执行。',
    code: 404,
  },
  {
    name: 'execution_in_progress',
    description: '无法删除正在进行的执行。请等到执行完成后再删除它。',
    code: 400,
  },
  {
    name: 'database_not_found',
    description: '未找到数据库',
    code: 404,
  },
  {
    name: 'database_already_exists',
    description: '数据库已存在',
    code: 409,
  },
  {
    name: 'database_timeout',
    description: '数据库超时。请尝试调整查询或添加索引。',
    code: 408,
  },
  {
    name: 'collection_not_found',
    description: '未找到请求 ID 的集合。',
    code: 404,
  },
  {
    name: 'collection_already_exists',
    description: '请求 ID 的集合已存在。请重新选择不同的 ID 或使用 ID.unique() 生成唯一 ID。',
    code: 409,
  },
  {
    name: 'collection_limit_exceeded',
    description: '已达到最大集合数量。',
    code: 400,
  },
  {
    name: 'document_not_found',
    description: '未找到请求 ID 的文档。',
    code: 404,
  },
  {
    name: 'document_invalid_structure',
    description: '文档结构无效。请确保属性符合集合定义。',
    code: 400,
  },
  {
    name: 'document_missing_data',
    description: '文档数据缺失。请重试并填充文档数据。',
    code: 400,
  },
  {
    name: 'document_missing_payload',
    description: '文档数据和权限缺失。必须提供文档数据或要更新的权限。',
    code: 400,
  },
  {
    name: 'document_already_exists',
    description: '请求 ID 的文档已存在。请重新选择不同的 ID 或使用 ID.unique() 生成唯一 ID。',
    code: 409,
  },
  {
    name: 'document_update_conflict',
    description: '远程文档比本地文档更新。',
    code: 409,
  },
  {
    name: 'document_delete_restricted',
    description: '文档无法删除，因为它被其他文档引用。',
    code: 403,
  },
  {
    name: 'attribute_not_found',
    description: '未找到请求 ID 的属性。',
    code: 404,
  },
  {
    name: 'attribute_unknown',
    description: '所需的索引属性未找到。请确认您所有属性均处于可用状态。',
    code: 400,
  },
  {
    name: 'attribute_not_available',
    description: '请求的属性尚不可用。请稍后再试。',
    code: 400,
  },
  {
    name: 'attribute_format_unsupported',
    description: '请求的属性格式不受支持。',
    code: 400,
  },
  {
    name: 'attribute_default_unsupported',
    description: '数组或必需属性不能设置默认值。',
    code: 400,
  },
  {
    name: 'attribute_already_exists',
    description: '请求的键的属性已存在。属性键必须唯一，请重新选择不同的键。',
    code: 409,
  },
  {
    name: 'attribute_limit_exceeded',
    description: '已达到最大属性数量。',
    code: 400,
  },
  {
    name: 'attribute_value_invalid',
    description: '属性值无效。请检查属性的类型、范围和值。',
    code: 400,
  },
  {
    name: 'attribute_type_invalid',
    description: '属性类型无效。',
    code: 400,
  },
  {
    name: 'relationship_value_invalid',
    description: '关系值无效。',
    code: 400,
  },
  {
    name: 'attribute_invalid_resize',
    description: '现有数据过大，无法调整到新大小，请先截断现有数据，然后重试。',
    code: 400,
  },
  {
    name: 'index_not_found',
    description: '未找到请求 ID 的索引。',
    code: 404,
  },
  {
    name: 'index_limit_exceeded',
    description: '已达到最大索引数量。',
    code: 400,
  },
  {
    name: 'index_already_exists',
    description: '请求键的索引已存在。请重新选择不同的键。',
    code: 409,
  },
  {
    name: 'index_invalid',
    description: '索引无效。',
    code: 400,
  },
  {
    name: 'project_not_found',
    description: '未找到请求 ID 的项目。请检查 X-Appwrite-Project 头的值以确保使用了正确的项目 ID。',
    code: 404,
  },
  {
    name: 'project_already_exists',
    description: '请求 ID 的项目已存在。请重新选择不同的 ID 或使用 ID.unique() 生成唯一 ID。',
    code: 409,
  },
  {
    name: 'project_provider_disabled',
    description: '所选 OAuth 提供者已被禁用。您可以使用 Appwrite 控制台启用 OAuth 提供者。',
    code: 412,
  },
  {
    name: 'project_provider_unsupported',
    description: '所选 OAuth 提供者不受支持。请检查<a href="/docs/client/account?sdk=web-default#accountCreateOAuth2Session">创建 OAuth2 会话文档</a>以获取完整的支持的 OAuth 提供者列表。',
    code: 400,
  },
  {
    name: 'project_invalid_success_url',
    description: 'OAuth 成功的重定向 URL 无效。',
    code: 400,
  },
  {
    name: 'project_invalid_failure_url',
    description: 'OAuth 失败的重定向 URL 无效。',
    code: 400,
  },
  {
    name: 'project_reserved_project',
    description: '项目 ID 被保留。请另选一个项目 ID。',
    code: 400,
  },
  {
    name: 'project_key_expired',
    description: '项目密钥已过期。请使用 Appwrite 控制台生成新的密钥。',
    code: 401,
  },
  {
    name: 'router_host_not_found',
    description: '主机不受信任。这可能是由于您未配置自定义域。请先添加自定义域到您的项目，然后再试。',
    code: 404,
  },
  {
    name: 'router_domain_not_configured',
    description: '_APP_DOMAIN、_APP_DOMAIN_TARGET 和 _APP_DOMAIN_FUNCTIONS 环境变量尚未配置。请在通过任何 IP 地址或主机名（除 localhost 外）访问 Appwrite 控制台之前配置域环境变量。该值可以是类似 203.0.113.0 的 IP 地址或类似 example.com 的主机名。',
    code: 500,
  },
  {
    name: 'rule_resource_not_found',
    description: '找不到资源。请检查 resourceId 和 resourceType 是否正确，或该资源是否存在。',
    code: 404,
  },
  {
    name: 'rule_not_found',
    description: '未找到请求 ID 的规则。请检查提供的 ID 是否正确或规则是否存在。',
    code: 404,
  },
  {
    name: 'rule_already_exists',
    description: '域名已被使用。请尝试使用不同的域名。',
    code: 409,
  },
  {
    name: 'rule_verification_failed',
    description: '域名验证失败。请检查您的 DNS 记录是否正确并重试。',
    code: 401,
  },
  {
    name: 'project_smtp_config_invalid',
    description: '提供的 SMTP 配置无效。请检查配置的值并重试。',
    code: 400,
  },
  {
    name: 'project_template_default_deletion',
    description: '您无法删除默认模板。如果您尝试重置模板更改，则可以忽略此错误，因为它已被重置。',
    code: 401,
  },
  {
    name: 'project_region_unsupported',
    description: '请求的区域要么处于非活动状态，要么不受支持。请检查 _APP_REGIONS 环境变量的值。',
    code: 400,
  },
  {
    name: 'webhook_not_found',
    description: '未找到请求 ID 的网络钩子。',
    code: 404,
  },
  {
    name: 'key_not_found',
    description: '未找到请求 ID 的密钥。',
    code: 404,
  },
  {
    name: 'platform_not_found',
    description: '未找到请求 ID 的平台。',
    code: 404,
  },
  {
    name: 'variable_not_found',
    description: '未找到请求 ID 的变量。',
    code: 404,
  },
  {
    name: 'variable_already_exists',
    description: '在该项目中已存在相同 ID 的变量。请尝试使用不同的 ID。',
    code: 409,
  },
  {
    name: 'graphql_no_query',
    description: '参数 "query" 不是可选的。',
    code: 400,
  },
  {
    name: 'graphql_too_many_queries',
    description: '查询过多。',
    code: 400,
  },
  {
    name: 'migration_not_found',
    description: '未找到请求 ID 的迁移。请验证提供的 ID 是否正确并重试。',
    code: 404,
  },
  {
    name: 'migration_already_exists',
    description: '请求 ID 的迁移已存在。请尝试使用不同的 ID。',
    code: 409,
  },
  {
    name: 'migration_in_progress',
    description: '迁移正在进行中。您可以在 Appwrite 控制台的“设置” > “迁移”中检查迁移状态。',
    code: 409,
  },
  {
    name: 'realtime_message_format_invalid',
    description: '消息格式无效。',
    code: 1003,
  },
  {
    name: 'realtime_policy_violation',
    description: '策略违规。',
    code: 1008,
  },
  {
    name: 'realtime_too_many_messages',
    description: '消息太多。',
    code: 1013,
  },
  {
    name: 'migration_provider_error',
    description: '提供者端发生错误。请稍后再试。',
    code: 400,
  },
  {
    name: 'health_queue_size_exceeded',
    description: '队列大小阈值达到。',
    code: 503,
  },
  {
    name: 'health_certificate_expired',
    description: '指定域的 SSL 证书已过期，不再有效。',
    code: 404,
  },
  {
    name: 'health_invalid_host',
    description: '无法建立与指定域的连接。请验证域名，并确保服务器正在运行且可访问。',
    code: 404,
  },
  {
    name: 'provider_not_found',
    description: '未找到请求 ID 的提供者。',
    code: 404,
  },
  {
    name: 'provider_already_exists',
    description: '请求 ID 的提供者已存在。',
    code: 409,
  },
  {
    name: 'provider_incorrect_type',
    description: '请求 ID 的提供者类型不正确。',
    code: 400,
  },
  {
    name: 'provider_missing_credentials',
    description: '请求 ID 的提供者缺少凭据。',
    code: 400,
  },
  {
    name: 'topic_not_found',
    description: '未找到请求 ID 的主题。',
    code: 404,
  },
  {
    name: 'topic_already_exists',
    description: '请求 ID 的主题已存在。',
    code: 409,
  },
  {
    name: 'subscriber_not_found',
    description: '未找到请求 ID 的订阅者。',
    code: 404,
  },
  {
    name: 'subscriber_already_exists',
    description: '请求 ID 的订阅者已存在。',
    code: 409,
  },
  {
    name: 'message_not_found',
    description: '未找到请求 ID 的消息。',
    code: 404,
  },
  {
    name: 'message_missing_target',
    description: '请求 ID 的消息没有收件人（主题或用户或目标）。',
    code: 400,
  },
  {
    name: 'message_already_sent',
    description: '请求 ID 的消息已发送。',
    code: 400,
  },
  {
    name: 'message_already_processing',
    description: '请求 ID 的消息正在处理。',
    code: 400,
  },
  {
    name: 'message_already_failed',
    description: '请求 ID 的消息已失败。',
    code: 400,
  },
  {
    name: 'message_already_scheduled',
    description: '请求 ID 的消息已调度交付。',
    code: 400,
  },
  {
    name: 'message_target_not_email',
    description: '请求 ID 的消息目标不是电子邮件目标。',
    code: 400,
  },
  {
    name: 'message_target_not_sms',
    description: '请求 ID 的消息目标不是短信目标。',
    code: 400,
  },
  {
    name: 'message_target_not_push',
    description: '请求 ID 的消息目标不是推送目标。',
    code: 400,
  },
  {
    name: 'message_missing_schedule',
    description: '消息不能在没有计划的情况下降低状态。',
    code: 400,
  },
  {
    name: 'schedule_not_found',
    description: '未找到请求 ID 的计划。',
    code: 404,
  },
  {
    name: 'target_provider_invalid_type',
    description: '目标具有无效的提供者类型。',
    code: 400,
  },
]
