<script lang="ts">
</script>


<!-- Table Section -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
	<!-- Card -->
	<div class="flex flex-col">
		<div class="-m-1.5 overflow-x-auto">
			<div class="p-1.5 min-w-full inline-block align-middle">
				<div
					class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700"
				>
					<!-- Header -->
					<div
						class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700"
					>
						<div>
							<h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200">Staff</h2>
						</div>

						<div>
							<div class="inline-flex gap-x-2">
								<a
									class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
									href="#"
								>
									View all
								</a>

								<a
									class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
									href="#"
								>
									<svg
										class="shrink-0 size-4"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" /></svg
									>
									Add user
								</a>
							</div>
						</div>
					</div>
					<!-- End Header -->

					<!-- Table -->
					<table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
						<thead class="bg-gray-50 dark:bg-neutral-800">
							<tr>
								<th scope="col" class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
									<div class="flex items-center gap-x-2">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
										>
											Name
										</span>
									</div>
								</th>

								<th scope="col" class="px-4 py-3 text-start">
									<div class="flex items-center gap-x-2">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
										>
											Role
										</span>
									</div>
								</th>

								<th scope="col" class="px-4 py-3 text-start">
									<div class="flex items-center gap-x-2">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
										>
											Phone Number
										</span>
									</div>
								</th>

								<th scope="col" class="px-4 py-3 text-start">
									<div class="flex items-center gap-x-2">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
										>
											Address
										</span>
									</div>
								</th>

								<th scope="col" class="px-4 py-3 text-start">
									<div class="flex items-center gap-x-2">
										<span
											class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200"
										>
											Email
										</span>
									</div>
								</th>

								<th scope="col" class="px-4 py-3 text-end"></th>
							</tr>
						</thead>

						<tbody class="divide-y divide-gray-200 dark:divide-neutral-700">
							<tr>
								<td class="size-px whitespace-nowrap">
									<div class="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
										<div class="flex items-center gap-x-3">
											<img
												class="inline-block size-[38px] rounded-full"
												src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
												alt="Avatar"
											/>
											<div class="grow">
												<span
													class="block text-sm font-semibold"
													>Christina Bersh</span
												>
												<span class="block text-sm"
													>christina@site.com</span
												>
											</div>
										</div>
									</div>
								</td>
								<td class="h-px w-72 whitespace-nowrap">
									<div class="px-6 py-3">
										
										<span class="block text-sm"
											>Human resources</span
										>
									</div>
								</td>
								<td class="size-px whitespace-nowrap">
									<div class="px-6 py-3">
										+1246 345 6780
									</div>
								</td>

								<td class="size-px whitespace-nowrap">
									<div class="px-6 py-3">
										<span class="">ST michael</span>
									</div>
								</td>

								<td class="size-px whitespace-nowrap">
									<div class="px-6 py-3">
										<span class="text-sm">28 Dec, 12:12</span>
									</div>
								</td>
								<td class="size-px whitespace-nowrap">
									<div class="px-6 py-1.5">
										<a
											class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
											href="#"
										>
											Edit
										</a>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
					<!-- End Table -->

					<!-- Footer -->
					<div
						class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700"
					>
						<div>
							<p class="text-sm text-gray-600 dark:text-neutral-400">
								<span class="font-semibold text-gray-800 dark:text-neutral-200">0</span> results
							</p>
						</div>

						<div>
							<div class="inline-flex gap-x-2">
								<button
									type="button"
									class="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								>
									<svg
										class="shrink-0 size-4"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg
									>
									Prev
								</button>

								<button
									type="button"
									class="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
								>
									Next
									<svg
										class="shrink-0 size-4"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg
									>
								</button>
							</div>
						</div>
					</div>
					<!-- End Footer -->
				</div>
			</div>
		</div>
	</div>
	<!-- End Card -->
</div>
<!-- End Table Section -->
