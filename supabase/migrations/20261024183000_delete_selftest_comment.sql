-- One-off: remove the anonymous-RPC self-test row inserted to verify the comments backend
DELETE FROM comments WHERE post_slug = '__selftest__';
