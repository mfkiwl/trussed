(function() {var implementors = {};
implementors["trussed"] = [{"text":"impl RefUnwindSafe for Request","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Reply","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Agree","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DebugDumpStore","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Decrypt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Delete","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DeriveKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DeserializeKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Encrypt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Exists","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FindObjects","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenerateKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Hash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LocateFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirFilesFirst","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirFilesNext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirFirst","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirNext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveDir","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RandomByteBuf","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SerializeKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sign","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WriteFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnsafeInjectKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnwrapKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Verify","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WrapKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RequestUserConsent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Reboot","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Agree","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CreateObject","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FindObjects","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DebugDumpStore","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Decrypt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Delete","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DeriveKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DeserializeKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Encrypt","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Exists","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenerateKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Hash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for LocateFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirFilesFirst","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirFilesNext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirFirst","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirNext","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveDir","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RemoveFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RandomByteBuf","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SerializeKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sign","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WriteFile","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Verify","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnsafeInjectKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnwrapKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for WrapKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RequestUserConsent","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Reboot","synthetic":true,"types":[]},{"text":"impl&lt;'c, T, C:&nbsp;?Sized&gt; RefUnwindSafe for FutureResult&lt;'c, T, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; RefUnwindSafe for ClientImplementation&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ClientError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyFlags","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SerializedKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyKind","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Aes256Cbc","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Chacha8Poly1305","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Ed255","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for X255","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HmacSha256","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for P256","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for P256Prehashed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sha256","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Totp","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Tdes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Trng","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ServiceEndpoint","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TrussedInterchange","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; RefUnwindSafe for ServiceResources&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P&gt; RefUnwindSafe for Service&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; !RefUnwindSafe for Fs&lt;S&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirState","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReadDirFilesState","synthetic":true,"types":[]},{"text":"impl&lt;S&gt; RefUnwindSafe for ClientFilestore&lt;S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, P&gt; RefUnwindSafe for ClientKeystore&lt;'a, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;P as Platform&gt;::S: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AeadUniqueId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeyAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Letters","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ObjectHandle","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PublicKeyAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PrivateKeyAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageAttributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UniqueId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Attributes","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CertificateType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ObjectType","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for StorageLocation","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Mechanism","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeySerialization","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SignatureSerialization","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Status","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for To","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Level","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Urgency","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()