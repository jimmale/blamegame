# blamegame

Every n minutes...

Check for Internet: 
Ping a random host from a list. 
If no response, iterate through the entire list. 
If no response from any, assign blame.


Blame:


1. Is the local link active/connected?
  * Remedy: Connect computer to the network
  * Blame: Customer. Bad wiring/configuration

2. Does the local link route to the default gateway?
  * Remedy: ifdown && ifup, if using DHCP.
  * Blame: Customer. Configuration.

3. Does the router respond to WebUI requests/ping?
  * Remedy: Reboot router
  * Blame: Router.

4. Does the router have an external IP?
  * Remedy: Refresh DHCP from ISP
  * Blame: Modem/ISP

5. Does the modem respond to WebUI requests/ping?
  * Remedy: Reboot modem
  * Blame: Modem

6. Does the modem have a strong signal with the ISP?
  * Remedy: Reboot Modem; Call ISP and complain.
  * Blame: ISP

7. Are DNS queries answered?
  * Remedy: Change DNS server
  * Blame: DNS

8. Do traceroutes complete?
  * Remedy: Call ISP and complain.
  * Blame: ISP/Last traceroute host to respond
